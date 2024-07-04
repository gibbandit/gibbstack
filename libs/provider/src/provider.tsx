import * as React from 'react';
import { SafeAreaProvider } from './safe-area';
import { UrqlProvider } from './urql';

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <UrqlProvider>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </UrqlProvider>
  );
}
