import { TInboxMenuItems } from "../../models/Inbox";
import { Dispatch } from "redux";
import { TAction } from "./index";
import { changeUserAC } from "./user";
import { none } from "fp-ts/lib/Option";

export const CHANGE_INBOX_MENU = "CHANGE_INBOX_MENU";

export type TChangeInboxMenu = {
  type: typeof CHANGE_INBOX_MENU;
  payload: {
    selectedItem: TInboxMenuItems;
  };
};

export type TChangeInboxMenuAC = (
  selectedItem: TInboxMenuItems
) => (dispatch: Dispatch<TAction>) => TChangeInboxMenu;

export const changeInboxMenuAC: TChangeInboxMenuAC = selectedItem => dispatch => {
  dispatch(changeUserAC(none));

  return {
    type: CHANGE_INBOX_MENU,
    payload: {
      selectedItem
    }
  };
};
