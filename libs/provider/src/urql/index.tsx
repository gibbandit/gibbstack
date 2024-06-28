import * as React from 'react';
import { Client, Provider, fetchExchange } from 'urql';
import { cacheExchange } from './exchanges/cacheExchange';


const client = new Client({
  url: 'http://localhost:3000/api/v1/graphql',
  suspense: true,
  exchanges: [cacheExchange, fetchExchange],
});

export default function UrqlProvider({ children }: React.PropsWithChildren) {
  return <Provider value={client}>{children}</Provider>;
}
