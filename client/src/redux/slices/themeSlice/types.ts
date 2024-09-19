enum ThemeMode {
  light = 'light',
  dark = 'dark'
}

interface ThemeState {
  mode: ThemeMode;
}

export type { ThemeState };
export { ThemeMode };
