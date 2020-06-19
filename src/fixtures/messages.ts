import { TMessage } from "../models/Message";

export const MESSAGES: TMessage[] = [
  {
    id: "asd",
    userId: "currentUser",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti est eveniet excepturi ipsam libero perferendis quas veniam! Exercitationem, natus.",
    date: new Date(2018, 3, 1, 11, 45)
  },
  {
    id: "qwe",
    userId: "asd",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti est eveniet.",
    date: new Date(2018, 3, 1, 11, 48)
  },
  {
    id: "zxc",
    userId: "qwe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti est eveniet excepturi ipsam libero perferendis quas veniam! ",
    date: new Date(2018, 3, 1, 11, 50)
  },
  {
    id: "asd1",
    userId: "currentUser",
    content: "Lorem ipsum dolor sit amet",
    date: new Date(2018, 3, 1, 11, 45)
  },
  {
    id: "rty",
    userId: "zxc",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti est eveniet excepturi ipsam libero perferendis quas veniam! Exercitationem, natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti est eveniet excepturi ipsam libero perferendis quas veniam! Exercitationem, natus.",
    date: new Date(2018, 3, 1, 11, 55)
  },
  {
    id: "asd2",
    userId: "currentUser",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti est eveniet excepturi ipsam libero perferendis quas veniam! Exercitationem, natus.",
    date: new Date(2018, 3, 1, 11, 45)
  }
];
