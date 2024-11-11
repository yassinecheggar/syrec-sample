export type UserRole = "admin" | "user" | "manager";
export interface User {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
}

export interface AuthContextType {
  loading: boolean;
  authenticated: boolean;
  keycloakToken: string | null | undefined;
  user: User | null;
  hasRole: (requiredRoles: UserRole[]) => boolean;
  handlogout: () => void;
}
