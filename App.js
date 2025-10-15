import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import storage from './src/services/storage';

export default function App() {
  useEffect(() => {
    // seed local data on first run
    storage.seedIfEmpty();
  }, []);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
