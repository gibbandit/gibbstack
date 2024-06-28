import { cacheExchange as _cacheExchange } from '@urql/exchange-graphcache';
import { schema } from '@acme/graphql';

export const cacheExchange = _cacheExchange({ schema });
