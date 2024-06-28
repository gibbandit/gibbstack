'use client';
import * as React from 'react';
import { SafeAreaProvider } from './safe-area';
import { TamaguiThemeProvider } from './theme';
import { TamaguiProvider } from './tamagui';
import UrqlProvider from './urql';
import { PortalProvider } from '@tamagui/portal'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <UrqlProvider>
      <TamaguiThemeProvider>
        <TamaguiProvider>
          <PortalProvider shouldAddRootHost>
            <SafeAreaProvider>
              {children}
            </SafeAreaProvider>
          </PortalProvider>
        </TamaguiProvider>
      </TamaguiThemeProvider>
    </UrqlProvider>
  );
}
