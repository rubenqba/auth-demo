import { randomBytes, randomUUID } from "crypto";
import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import KeycloakProvider from "next-auth/providers/keycloak";
import { Role, RoleUtils } from "@model/auth";

const keycloak = KeycloakProvider({
  issuer: process.env.KEYCLOAK_ISSUER,
  clientId: process.env.KEYCLOAK_ID!,
  clientSecret: process.env.KEYCLOAK_SECRET!,
});

async function doFinalSignoutHandshake(jwt: JWT) {
  console.log(JSON.stringify(jwt, null, 2));
  const { idToken } = jwt;

  if (idToken) {
    try {
      // Add the id_token_hint to the query string
      const params = new URLSearchParams();
      params.append("id_token_hint", idToken);
      const url = `${keycloak.options!
        .issuer!}/protocol/openid-connect/logout?${params.toString()}`;
      await fetch(url);
    } catch (e: any) {
      console.error(
        "Unable to perform post-logout handshake",
        (e as Error)?.message || e
      );
    }
  }
}

export const authOptions: NextAuthOptions = {
  providers: [keycloak],
  session: {
    maxAge: 30 * 60,
    updateAge: 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (profile) {
        const roles: Role[] =
          profile.roles
            .filter((r) => r.startsWith("CORPORATE_"))
            .map((r) => RoleUtils.role(r)) || [];
        user.roles = roles;
        user.partner = profile.settings.partner_id;
      }
      if (user.roles && user.roles.length === 0) {
        throw new Error("User is not allowed to use this applicattion");
      }
      return true;
    },
    async jwt({ token, user, account, profile, session }) {
      if (account) {
        // copy the expiry from the original keycloak token
        // overrides the settings in NextAuth.session
        // token.exp = account.expires_at;
        token.idToken = account.id_token;
        token.accessToken = account.access_token;
      }

      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = { ...token.user };
      }
      return session;
    },
  },
  events: {
    signOut: ({ session, token }) => doFinalSignoutHandshake(token),
  },
};

export default NextAuth(authOptions);
