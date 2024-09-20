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

export { chatList };
export type { IChat };
