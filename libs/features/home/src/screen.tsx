'use client';
import { graphql } from '@acme/graphql';
import { useQuery } from '@acme/urql';
import { Suspense } from 'react';
import { Text, Button, Switch, Label } from '@acme/components';
import { View } from 'react-native';
import React from 'react';

export function HomeScreen() {
  const HelloWorldQuery = graphql(`
    query helloWorld {
      greetings
    }
  `);

  const [result, reexecute] = useQuery({
    query: HelloWorldQuery,
  });

  const [checked, setChecked] = React.useState(false);

  const refresh = () => {
    reexecute({
      requestPolicy: checked ? 'cache-only' : 'network-only',
    });
  };

  return (
    <View className="flex-1 items-center justify-center gap-8 bg-background">
      <Suspense>
        <Text>{result.data?.greetings}</Text>
      </Suspense>
      <View className="flex-row items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} id="use-cache" />
        <Label
          nativeID="use-cache"
          onPress={() => {
            setChecked((prev) => !prev);
          }}
        >
          Use Cache
        </Label>
      </View>
      <Button onPress={refresh}>
        <Text>Refetch</Text>
      </Button>
    </View>
  );
}
