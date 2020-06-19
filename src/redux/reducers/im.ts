import { CHANGE_IM, IM_LOADED, TChangeIM, TImLoaded } from "../actions/im";
import { Reducer } from "redux";
import { Messenger, TMessenger } from "../../models/Messenger";

export const changeImReducer: Reducer<Messenger, TChangeIM> = (
  state = Messenger.Whatsapp,
  action
) => {
  switch (action.type) {
    case CHANGE_IM:
      return action.payload.im;

    default:
      return state;
  }
};

export const imLoadedReducer: Reducer<TMessenger[], TImLoaded> = (
  state = [],
  action
) => {
  switch (action.type) {
    case IM_LOADED:
      return action.payload.messengers;

    default:
      return state;
  }
};
