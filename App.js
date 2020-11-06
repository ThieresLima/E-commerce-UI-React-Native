import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import AppStack from './src/routes/AppStack';

function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#3e1160' />
      <AppStack />
    </>
  );
}

export default App;
