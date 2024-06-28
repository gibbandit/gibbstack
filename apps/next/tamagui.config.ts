// eslint-disable-next-line @nx/enforce-module-boundaries
import { type Conf, config } from '../../libs/tamagui-config/src/index';

declare module 'tamagui' {
  type TamaguiCustomConfig = Conf;
}

export default config;
