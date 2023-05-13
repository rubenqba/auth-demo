import { DefaultSession } from "next-auth";

export enum Role {
  CORPORATE_BUYER = "CORPORATE_BUYER",
  CORPORATE_STAFF = "CORPORATE_STAFF",
}

export namespace RoleUtils {
  export function name(role: Role): string {
    return Role[role];
  }

  export function role(name: string): Role {
    return Role[name as keyof typeof Role];
  }
}

export type AuthenticatedUser = {
  id: string;
  name: string;
  email: string;
  roles: Role[];
  partner: string;
} & DefaultSession["user"];
