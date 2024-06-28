'use client';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleSheet } from 'react-native';

import { config } from '@acme/tamagui-config';

export function StylesProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    // @ts-expect-error RN doesn't have this type
    const sheet = StyleSheet.getSheet();
    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: sheet.textContent }}
          id={sheet.id}
        />
        <style
          key="tamagui-css"
          dangerouslySetInnerHTML={{
            __html: config.getNewCSS(),
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: config.getCSS({
              // if you are using "outputCSS" option, you should use this "exclude"
              // if not, then you can leave the option out
              /* exclude:
                process.env.NODE_ENV === 'production' ? 'design-system' : null, */
            }),
          }}
        />
      </>
    );
  });
  return <>{children}</>;
}
