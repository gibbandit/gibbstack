import * as React from 'react';
import {
  ColorScheme,
  NextThemeProvider,
  useRootTheme,
} from '@tamagui/next-theme';

export const TamaguiThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setTheme] = useRootTheme();

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        setTheme(next as ColorScheme);
      }}
      skipNextHead
    >
      {children}
    </NextThemeProvider>
  );
};

export { useRootTheme } from '@tamagui/next-theme';
