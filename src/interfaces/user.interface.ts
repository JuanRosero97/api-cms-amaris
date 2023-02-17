export interface User {
  id: string;
  firstName: string;
  lastName: string;
  roles?: ("admin" | "editor" | "lector")[];
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  Nombre: string;
}
