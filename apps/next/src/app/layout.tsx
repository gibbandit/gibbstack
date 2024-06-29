import 'raf/polyfill';

if (typeof requestAnimationFrame === 'undefined') {
  if (typeof setImmediate !== 'undefined') {
    globalThis.requestAnimationFrame = setImmediate;
  } else {
    globalThis.requestAnimationFrame = (callback) => {
      const now = Date.now();
      callback(now);
      return now;
    };
  }
}
import '@tamagui/core/reset.css';
import '@tamagui/font-inter/css/400.css';
import '@tamagui/font-inter/css/700.css';

import { Provider } from '@acme/provider';
import { StylesProvider } from './styles-provider';
import { Metadata, Viewport } from 'next';

/* if (process.env.NODE_ENV === 'production') {
  require('../../public/tamagui.css');
} */

/* const appUrl = `${process.env.NEXT_PUBLIC_APP_URL}`;
const title = `${process.env.NEXT_PUBLIC_METADATA_NAME}`;
const description = `${process.env.NEXT_PUBLIC_METADATA_DESCRIPTION}`;
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
  // minimumScale: 1,
  // maximumScale: 1,
  // userScalable: false,
};

/* export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title,
  description,
  openGraph: {
    type: 'website',
    url: appUrl,
    title,
    description,
  },
}; */

const App = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <script
          key="tamagui-animations-mount"
          dangerouslySetInnerHTML={{
            // avoid flash of animated things on enter
            __html: `document.documentElement.classList.add('t_unmounted')`,
          }}
        />
        <StylesProvider>
          <Provider>{children}</Provider>
        </StylesProvider>
      </body>
    </html>
  );
};

export default App;
