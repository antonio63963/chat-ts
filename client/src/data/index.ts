import { faker } from "@faker-js/faker";

type IChat = {
  id: string | number;
  img?: string | null;
  name: string;
  msg: string;
  time: string;
  unread: number;
  pinned: boolean;
  online: boolean;
};

type IMessage = {
  id: string | number;
  type: "msg";
  subtype?: "img" | "file" | "link" | "reply";
  incoming: boolean;
  outgoing: boolean;
  preview?: string;
  img?: string;
  message?: string;
  reply?: string;
};

type ITimeline = {
  type: "timeline";
  text: string;
};

const chatList: IChat[] = [
  {
    id: 0,
    img: null,
    name: faker.internet.userName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: null,
    name: faker.internet.userName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: "/users/albert.jpg",
    name: "Albert Jibran",
    msg: "I'm here!!!",
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: "/users/alex.jpg",
    name: "Alex Kex",
    msg: "What about some delisious meal?",
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: "/users/ann.jpg",
    name: "Ann Hampfer",
    msg: "I'm busy today. Sorry",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: "/users/dave.jpg",
    name: "Dave Fox",
    msg: "HO-HO!!!",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: "/users/mark.jpg",
    name: "Dragon",
    msg: "ready to meet you",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: "/users/mila.jpg",
    name: "Mila Laguna",
    msg: "Hi!",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const chatHistory: (IMessage | ITimeline)[] = [
  {
    id: 1,
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "timeline",
    text: "Today",
  },
  {
    id: 2,
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    id: 3,
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    id: 4,
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    id: 5,
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: "/mockImg/abstract.jpg",
    incoming: true,
    outgoing: false,
  },
  {
    id: 6,
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    id: 7,
    type: "msg",
    subtype: "file",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    id: 8,
    type: "msg",
    subtype: "link",
    preview: "/mockImg/cat.jpg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    id: 9,
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

export { chatList, chatHistory };
export type { IChat, IMessage, ITimeline };
