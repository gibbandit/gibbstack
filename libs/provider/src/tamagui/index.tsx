import { TamaguiProvider as TAMAGUI_PROVIDER } from 'tamagui';
import { config } from '@acme/tamagui-config';
import { useRootTheme } from '../theme';

export const TamaguiProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [currentTheme] = useRootTheme();

  return (
    <TAMAGUI_PROVIDER
      config={config}
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={currentTheme}
    >
      {children}
    </TAMAGUI_PROVIDER>
  );
};
