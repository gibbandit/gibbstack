//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withExpo } = require('@expo/next-adapter');

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
    'expo-router',
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'react-native-reanimated',
    'react-native-svg',
    'nativewind',
    'react-native-gesture-handler',
    'react-native-css-interop',
  ],
  experimental: {
    forceSwcTransforms: true,
    serverComponentsExternalPackages: ['@whatwg-node'],
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withExpo,
];

module.exports = composePlugins(...plugins)(nextConfig);
