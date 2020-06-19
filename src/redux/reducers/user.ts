import { CHANGE_USER, TChangeUser } from "../actions/user";
import { Reducer } from "redux";
import { TUser } from "../../models/User";
import { none, Option } from "fp-ts/lib/Option";

export const changeUserReducer: Reducer<Option<TUser>, TChangeUser> = (
  state = none,
  action
) => {
  switch (action.type) {
    case CHANGE_USER:
      return action.payload.user;

    default:
      return state;
  }
};
