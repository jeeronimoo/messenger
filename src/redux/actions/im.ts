import { Messenger, TMessenger } from "../../models/Messenger";
import { Dispatch } from "redux";
import { TAction } from "./index";
import { changeInboxMenuAC } from "./inbox";
import { PrimaryMenuItem } from "../../models/Inbox";

export const CHANGE_IM = "CHANGE_IM";
export const IM_LOADED = "IM_LOADED";

export type TChangeIM = {
  type: typeof CHANGE_IM;
  payload: {
    im: Messenger;
  };
};

export type TChangeImAC = (
  im: Messenger
) => (dispatch: Dispatch<TAction>) => TChangeIM;

export const changeImAC: TChangeImAC = im => dispatch => {
  dispatch(changeInboxMenuAC(PrimaryMenuItem.All)(dispatch));

  return {
    type: CHANGE_IM,
    payload: {
      im
    }
  };
};

//
export type TImLoaded = {
  type: typeof IM_LOADED;
  payload: {
    messengers: TMessenger[];
  };
};

export type TGetImAC = (messengers: TMessenger[]) => TImLoaded;

export const getImAC: TGetImAC = messengers => ({
  type: IM_LOADED,
  payload: {
    messengers
  }
});
