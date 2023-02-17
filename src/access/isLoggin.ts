import { Access } from "payload/config";
import { FieldAccess } from "payload/types";
import { User } from "../interfaces/user.interface";

export const isLoggedIn: Access<any, User> = ({ req: { user } }) => {
  // Return true if user is logged in, false if not
  return Boolean(user);
};

export const isLogginInFieldLevel: FieldAccess<
  { id: string },
  unknown,
  User
> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user);
};
