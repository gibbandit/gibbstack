'use client';
import { Suspense } from 'react';
import { View, Text, Spinner } from 'tamagui';
import { graphql } from '@acme/graphql';
import { useQuery } from '@acme/urql';

export function HomeScreen() {
  return (
    <View
      width="100%"
      height="100%"
      flexGrow={1}
      gap={32}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Suspense fallback={<Loading />}>
        <HelloWorld />
      </Suspense>
    </View>
  );
}

function HelloWorld() {
  const HelloWorldQuery = graphql(`
    query helloWorld {
      greetings
    }
  `);

  const [result] = useQuery({
    query: HelloWorldQuery,
  });

  return <Text>{result.data?.greetings}</Text>;
}

function Loading() {
  return <Spinner color="$green10" />;
}
