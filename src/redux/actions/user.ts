import { TUser } from "../../models/User";
import { Option } from "fp-ts/lib/Option";

export const CHANGE_USER = "CHANGE_USER";

export type TChangeUser = {
  type: typeof CHANGE_USER;
  payload: {
    user: Option<TUser>;
  };
};

export type TChangeUserAC = (user: Option<TUser>) => TChangeUser;

export const changeUserAC: TChangeUserAC = user => ({
  type: CHANGE_USER,
  payload: {
    user: user
  }
});
