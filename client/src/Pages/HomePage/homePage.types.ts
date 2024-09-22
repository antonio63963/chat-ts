interface IChatWithActive {
  id: string | number;
  img?: string | null;
  name: string;
  msg: string;
  time: string;
  unread: number;
  pinned: boolean;
  online: boolean;
  isActive?: boolean;
}

export type {
  IChatWithActive,
}
