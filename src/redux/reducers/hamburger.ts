import { Reducer } from "redux";
import {
  CHANGE_MENU_VISIBILITY,
  RESIZE_WINDOW,
  TChangeMenuVisibility,
  TResizeWindow
} from "../actions/hamburger";

export const resizeWindowReducer: Reducer<boolean, TResizeWindow> = (
  state = true,
  action
) => {
  switch (action.type) {
    case RESIZE_WINDOW:
      return action.payload.isSmallScreen;

    default:
      return state;
  }
};

export const changeMenuVisibilityReducer: Reducer<
  boolean,
  TChangeMenuVisibility
> = (state = true, action) => {
  switch (action.type) {
    case CHANGE_MENU_VISIBILITY:
      return !state;

    default:
      return state;
  }
};
