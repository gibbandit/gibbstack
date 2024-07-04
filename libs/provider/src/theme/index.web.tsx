'use client';
import { ThemeProvider as THEME_PROVIDER } from 'next-themes';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleSheet } from 'react-native';
import { vars } from 'nativewind';

//fix for nativewind not being applied
//eslint-disable-next-line
const theme = vars({});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    //@ts-expect-error StyleSheet.getSheet has no types
    const sheet = StyleSheet.getSheet();
    return (
      <style
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
        style={theme}
      />
    );
  });
  return (
    <THEME_PROVIDER
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </THEME_PROVIDER>
  );
}
