'use client';

import { useMemo } from 'react';
import {
  UrqlProvider as URQL_PROVIDER,
  ssrExchange,
  fetchExchange,
  createClient,
} from '@urql/next';
import { cacheExchange } from './exchanges/cacheExchange';

export function UrqlProvider({ children }: React.PropsWithChildren) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined',
    });
    const client = createClient({
      url: 'http://localhost:3000/api/v1/graphql',
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
      fetchOptions: { cache: 'no-store' },
    });

    return [client, ssr];
  }, []);

  return (
    <URQL_PROVIDER client={client} ssr={ssr}>
      {children}
    </URQL_PROVIDER>
  );
}
