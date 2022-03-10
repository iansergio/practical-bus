import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Mn from './src/Menu/index';
import Ct from './src/Cartao/index';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Menu">
        <Drawer.Screen name="Menu" component={Mn} />
        <Drawer.Screen name="Cartao" component={Ct} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

