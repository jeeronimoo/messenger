import { TMessage } from "./Message";

export type TUser = {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  birthday: Date;
  gender: string;
  language: string;
  location: string;
  isOnline?: boolean;
  lastMessage?: TMessage;
};
