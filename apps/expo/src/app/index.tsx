import * as React from 'react';
import { Stack } from 'expo-router';
import { HomeScreen } from '@acme/features/home';

export const Home = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <HomeScreen />
    </>
  );
};

export default Home;
