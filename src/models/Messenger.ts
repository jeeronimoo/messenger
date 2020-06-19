export enum Messenger {
  Whatsapp,
  Viber,
  Facebook,
  Skype
}

export type TMessenger = {
  id: Messenger;
  allMessagesCount: number;
  unreadMessagesCount: number;
  groupsCount: number;
  channelsCount: number;
  mediaCount: number;
};
