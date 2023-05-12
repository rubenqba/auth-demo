export enum Role {
  CORPORATE_BUYER,
  CORPORATE_STAFF,
}

export namespace RoleUtils {
  export function name(role: Role): string {
    return Role[role];
  }

  export function role(name: string): Role {
    return Role[name as keyof typeof Role];
  }
}
