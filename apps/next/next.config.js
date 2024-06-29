//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withExpo } = require('@expo/next-adapter');
const { withTamagui } = require('@tamagui/next-plugin');
const MillionLint = require('@million/lint');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  reactStrictMode: true,
  transpilePackages: [
    'solito',
    'react-native-web',
    'expo-linking',
    'expo-constants',
    'expo-modules-core',
    'react-native-safe-area-context',
    'react-native-reanimated',
    'react-native-gesture-handler',
  ],
  experimental: {
    scrollRestoration: true,
    forceSwcTransforms: true,
    swcTraceProfiling: true,
    webpackBuildWorker: true,
    serverComponentsExternalPackages: ['@whatwg-node'],
  },
};

const withMillion = MillionLint.next({ rsc: true });

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withExpo,
  withMillion,
  withTamagui({
    appDir: true,
    config: './tamagui.config.ts',
    components: ['tamagui'],
    /*     outputCSS:
      process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null, */
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    platform: 'web',
    disableExtraction: process.env.NODE_ENV === 'development',
  }),
];

module.exports = composePlugins(...plugins)(nextConfig);
