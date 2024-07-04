import { storage } from '@acme/utils/kv';
import { type CurrentThemeVariant, ThemeVariant } from '@acme/utils/theme';
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { Appearance } from 'react-native';
import { z } from 'zod';

const ThemeVariantSchema = z.enum([
  ThemeVariant.system,
  ThemeVariant.light,
  ThemeVariant.dark,
]);

export const appThemeKey = 'appTheme';

const appThemeAtom = atomWithStorage(appThemeKey, ThemeVariant.system, storage);

export function useAppTheme() {
  return [...useAtom(appThemeAtom)] as const;
}

const currentThemeAtom = atom<CurrentThemeVariant>((get) => {
  const userTheme = ThemeVariantSchema.parse(get(appThemeAtom));
  if (userTheme === ThemeVariant.system) {
    return Appearance.getColorScheme() as CurrentThemeVariant;
  }
  return userTheme;
});

export function useCurrentTheme() {
  return [...useAtom(currentThemeAtom)] as const;
}
