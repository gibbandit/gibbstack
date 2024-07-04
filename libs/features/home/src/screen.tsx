'use client';

import { graphql } from '@acme/graphql';
import { useQuery } from '@acme/urql';
import { Suspense } from 'react';
import { Text, Button } from '@acme/components';
import { View } from 'react-native';

export function HomeScreen() {
  const HelloWorldQuery = graphql(`
    query helloWorld {
      greetings
    }
  `);

  const [result, reexecute] = useQuery({
    query: HelloWorldQuery,
  });

  const refresh = () => {
    reexecute({
      requestPolicy: 'network-only',
    });
  };

  return (
    <View className="flex-1 items-center justify-center gap-8">
      <Suspense>
        <Text>{result.data?.greetings}</Text>
      </Suspense>
      <Button onPress={refresh}>
        <Text>Refetch</Text>
      </Button>
    </View>
  );
}
