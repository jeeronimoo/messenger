import { Reducer } from "redux";
import { CHANGE_INBOX_MENU, TChangeInboxMenu } from "../actions/inbox";
import { PrimaryMenuItem, TInboxMenuItems } from "../../models/Inbox";

export const changeInboxMenuReducer: Reducer<
  TInboxMenuItems,
  TChangeInboxMenu
> = (state = PrimaryMenuItem.All, action) => {
  switch (action.type) {
    case CHANGE_INBOX_MENU:
      return action.payload.selectedItem;

    default:
      return state;
  }
};
