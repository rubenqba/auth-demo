import axios, { AxiosError } from "axios";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import KeycloakProvider from "next-auth/providers/keycloak";

const keycloak = KeycloakProvider({
  issuer: process.env.KEYCLOAK_ISSUER,
  clientId: process.env.KEYCLOAK_ID!,
  clientSecret: process.env.KEYCLOAK_SECRET!,
});

// this performs the final handshake for the keycloak
// provider, the way it's written could also potentially
// perform the action for other providers as well
async function doFinalSignoutHandshake(jwt: JWT) {
  console.log(JSON.stringify(jwt, null, 2))
  const { idToken } = jwt;

  if (idToken) {
    try {
      // Add the id_token_hint to the query string
      const params = new URLSearchParams();
      params.append("id_token_hint", idToken);
      const url = `${keycloak.options!.issuer!}/protocol/openid-connect/logout?${params.toString()}`;
      const { status, statusText } = await axios.get(url);

      // The response body should contain a confirmation that the user has been logged out
      console.log("Completed post-logout handshake", status, statusText);
    } catch (e: any) {
      console.error(
        "Unable to perform post-logout handshake",
        (e as AxiosError)?.code || e
      );
    }
  }
}

export default NextAuth({
  providers: [keycloak],
  session: {
    maxAge: 30 * 60,
    updateAge: 60,
  },
  callbacks: {
    jwt: async ({ token, user, account, profile }) => {
      if (account) {
        // copy the expiry from the original keycloak token
        // overrides the settings in NextAuth.session
        token.exp = account.expires_at;
        token.idToken = account.id_token;
      }

      return token;
    },
  },
  events: {
    signOut: ({ session, token }) => doFinalSignoutHandshake(token),
  },
});
