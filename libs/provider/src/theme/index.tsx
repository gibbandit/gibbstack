import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as THEME_PROVIDER,
} from '@react-navigation/native';
import { Appearance } from 'react-native';
import { storage } from '@acme/utils/kv';
import { appThemeKey, useAppTheme, useCurrentTheme } from '@acme/atoms/theme';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect } from 'react';
import { ThemeVariant } from '@acme/utils/theme';

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [appTheme, setAppTheme] = useAppTheme();
  const [currentTheme] = useCurrentTheme();

  const defaultTheme = 'system';
  const statusBarStyle =
    currentTheme === ThemeVariant.dark ? ThemeVariant.light : ThemeVariant.dark;
  const themeValue =
    currentTheme === ThemeVariant.dark ? DarkTheme : DefaultTheme;

  useEffect(() => {
    const systemThemeChangeListener = Appearance.addChangeListener(() => {
      setAppTheme(Appearance.getColorScheme() as ThemeVariant);
    });
    return () => {
      systemThemeChangeListener.remove();
    };
  }, [setAppTheme]);

  useLayoutEffect(() => {
    storage.getItem(appThemeKey, defaultTheme).then((value) => {
      setAppTheme(value as ThemeVariant);
    });
  }, [setAppTheme]);

  useEffect(() => {
    if (appTheme === undefined) {
      storage.setItem(appThemeKey, defaultTheme);
      setAppTheme(defaultTheme);
    } else {
      storage.setItem(appThemeKey, appTheme);
    }
  }, [appTheme, setAppTheme]);

  return (
    <THEME_PROVIDER value={themeValue}>
      <StatusBar style={statusBarStyle} />
      {children}
    </THEME_PROVIDER>
  );
};
