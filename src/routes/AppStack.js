import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ProductInfo from '../screens/ProductInfo';
import NavigationTabs from './NavigationTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="ProductInfo" component={ProductInfo} />
        <Screen name="NavigationTabs" component={NavigationTabs}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;