import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Offers from '../screens/Offers';
import DepartmentList from '../screens/DepartmentList';
import Help from '../screens/Help';
import Profile from '../screens/Profile';

import Icon  from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
  Offers: {
    name: 'home'
  },
  Department: {
    name: 'notes'
  },
  Help: {
    name: 'live-help'
  },
  Profile: {
    name: 'person'
  },
}

function NavigationTabs() {
  return (
    <Navigator
      initialRouteName="Offers"
      screenOptions = {({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} size={28} color={color} />
        },
      })}
      tabBarOptions={{
            style: {
              height: 60,
              backgroundColor: '#601b91', 
            },
            labelStyle: {
              fontSize: 14,
              marginBottom: 5
          },    
            activeTintColor: '#fff',
            inactiveTintColor: 'color: rgba(255, 255, 255, 0.6)',
            activeBackgroundColor: '#3e1160',
        }}
    >
      <Screen name="Offers"
       component={Offers}
       options={{
        tabBarLabel: "Ofertas"
       }}
      />
      <Screen 
        name="Department" 
        component={DepartmentList} 
        options={{
          tabBarLabel: "Departamento"
        }}       
      />
      <Screen 
        name="Help" 
        component={Help}
        options={{
          tabBarLabel: "Ajuda"
        }}
      />
      <Screen
        name="Profile"
        component={Profile} 
        options={{
          tabBarLabel: "Perfil"
        }}
      />
    </Navigator>
  );
};

export default NavigationTabs;