import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Mn from './src/Menu/index.js';
import Mp from './src/Mapa/index.js';
import Cp from './src/Comprar/index.js';
import Cart from './src/Cartao/index.js';
import Iti from './src/Itinerarios/index.js';
import Upload from './src/Perfil/index.js';
import Login from './src/Login/index.js';
import Cadastro from './src/Cadastro/index.js';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Menu">
        <Drawer.Screen name="Menu" component={Mn} />
        <Drawer.Screen name="Cartao" component={Cart} />
        <Drawer.Screen name="Comprar" component={Cp} />
        <Drawer.Screen name="Itinerarios" component={Iti} />
        <Drawer.Screen name="Mapa" component={Mp} />
        <Drawer.Screen name="Perfil" component={Upload} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


