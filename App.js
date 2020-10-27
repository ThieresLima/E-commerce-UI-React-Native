import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './src/Navigation';

function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#601b91' />
      <NavigationContainer>
        <NavigationTab />
      </NavigationContainer>
    </>
  );
}

export default App;
