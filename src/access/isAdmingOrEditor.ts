import { Access, FieldAccess } from "payload/types";
import { User } from "../interfaces/user.interface";

export const isUpdating: Access<any, User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(
    user?.roles?.includes("admin") || user?.roles?.includes("editor")
  );
};

export const isUpdatingFieldLevel: FieldAccess<
  { id: string },
  unknown,
  User
> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(
    user?.roles?.includes("admin") || user?.roles?.includes("editor")
  );
};
