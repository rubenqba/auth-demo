import { DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt'

declare module "next-auth" {
  interface Profile {
    roles: string[];
    settings: UserAuthSettings;
  }

  interface User {
    email: string;
    roles: Role[],
    partner: string
  }

  interface Session {
    accessToken: string;
    user: {
      id: string;
      name: string;
      email: string;
      roles: Role[];
      partner: string;
    } & DefaultUser['user']
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    idToken?: string;
    accessToken?: string;
    user?: User;
  }
}