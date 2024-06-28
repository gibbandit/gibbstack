import { Metadata } from 'next';
import { HomeScreen } from '@acme/features/home';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return <HomeScreen />;
}
