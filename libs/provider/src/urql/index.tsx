import * as React from 'react';
import { Client, Provider, fetchExchange } from 'urql';
import { cacheExchange } from './exchanges/cacheExchange';

const client = new Client({
  url: 'http://127.0.0.1:3000/api/v1/graphql',
  suspense: true,
  exchanges: [cacheExchange, fetchExchange],
});

export function UrqlProvider({ children }: React.PropsWithChildren) {
  return <Provider value={client}>{children}</Provider>;
}
