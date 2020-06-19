import { TChangeIM } from "./im";
import { TChangeUser } from "./user";
import { TSendMessage } from "./message";
import { TChangeInboxMenu } from "./inbox";
import { TChangeMenuVisibility, TResizeWindow } from "./hamburger";

export type TAction =
  | TChangeIM
  | TChangeUser
  | TSendMessage
  | TChangeInboxMenu
  | TResizeWindow
  | TChangeMenuVisibility;
