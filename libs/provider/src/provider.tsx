'use client';
import * as React from 'react';
import { PortalHost } from '@rn-primitives/portal';
import { SafeArea } from './safe-area';
import { UrqlProvider } from './urql';
import { ThemeProvider } from './theme';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>
        <UrqlProvider>
          <SafeArea>{children}</SafeArea>
        </UrqlProvider>
      </ThemeProvider>
      <PortalHost />
    </>
  );
}
