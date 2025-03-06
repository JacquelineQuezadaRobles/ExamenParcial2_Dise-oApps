import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Ahorro from './Components/Ahorro';
import Perfil from './Components/Perfil';
import Configuracion from './Components/Configuración';


export default function App() {
  const Stack = createStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name = 'Home' component = {Home}/>
      <Stack.Screen name = 'Ahorros' component = {Ahorro}/>
      <Stack.Screen name = 'Perfil' component = {Perfil}/>
      <Stack.Screen name = 'Configuración' component = {Configuracion}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}