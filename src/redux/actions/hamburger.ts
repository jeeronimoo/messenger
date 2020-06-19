export const RESIZE_WINDOW = "RESIZE_WINDOW";
export const CHANGE_MENU_VISIBILITY = "CHANGE_MENU_VISIBILITY";

export type TResizeWindow = {
  type: typeof RESIZE_WINDOW;
  payload: {
    isSmallScreen: boolean;
  };
};

export type TResizeWindowAC = (isSmallScreen: boolean) => TResizeWindow;

export const resizeWindowAC: TResizeWindowAC = isSmallScreen => ({
  type: RESIZE_WINDOW,
  payload: {
    isSmallScreen
  }
});

//

export type TChangeMenuVisibility = {
  type: typeof CHANGE_MENU_VISIBILITY;
};

export type TChangeMenuVisibilityAC = () => TChangeMenuVisibility;

export const changeMenuVisibility: TChangeMenuVisibilityAC = () => ({
  type: CHANGE_MENU_VISIBILITY
});
