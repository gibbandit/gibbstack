// eslint-disable-next-line @nx/enforce-module-boundaries
import { type Conf, config } from '../../libs/tamagui-config/src/index';

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
