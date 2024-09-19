import { ThemeState, ThemeMode } from "./slices/themeSlice/types";

interface IStore {
  theme: ThemeState;
};

export type {
  IStore,
  ThemeState
};
export {
  ThemeMode
};
