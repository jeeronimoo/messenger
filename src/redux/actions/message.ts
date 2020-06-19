export const SEND_MESSAGE = "SEND_MESSAGE";

export type TSendMessage = {
  type: typeof SEND_MESSAGE;
  payload: {
    content: string;
  };
};

export type TSendMessageAC = (content: string) => TSendMessage;

export const sendMessageAC: TSendMessageAC = content => ({
  type: SEND_MESSAGE,
  payload: {
    content
  }
});
