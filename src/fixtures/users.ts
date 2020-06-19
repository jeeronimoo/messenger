import { TUser } from "../models/User";
import * as genericAvatar from "./../assets/icons/generic-avatar.svg";
import * as mattIcon from "./../assets/icons/matt-photo.svg";

export const USERS: TUser[] = [
  {
    id: "asd1",
    name: "Matt Thompson",
    avatar: mattIcon,
    isOnline: true,
    phone: "072 143 9920",
    birthday: new Date("01.01.1998"),
    gender: "Male",
    language: "English",
    location: "Cape Town, RSA",
    lastMessage: {
      id: "msg-1",
      userId: "asd1",
      content: "Thanks again you have been...",
      date: new Date("08.01.2018")
    }
  },
  {
    id: "asd2",
    name: "Claire Sharwood",
    avatar: genericAvatar,
    isOnline: true,
    phone: "072 143 9920",
    birthday: new Date("01.01.1998"),
    gender: "Female",
    language: "English",
    location: "Cape Town, RSA",
    lastMessage: {
      id: "msg-2",
      userId: "asd2",
      content: "My selfie game is lacking can...",
      date: new Date("08.03.2018")
    }
  },
  {
    id: "asd3",
    name: "Kristen Mckellar",
    avatar: genericAvatar,
    isOnline: true,
    phone: "072 143 9920",
    birthday: new Date("01.01.1998"),
    gender: "Female",
    language: "English",
    location: "Cape Town, RSA",
    lastMessage: {
      id: "msg-3",
      userId: "asd3",
      content: "Thanks again you have been...",
      date: new Date("08.10.2018")
    }
  }
];
