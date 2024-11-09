import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PlayerScreen from './screens/PlayerScreen';
import PlayerForm from './components/PlayerForm';
import TeamScreen from './screens/TeamScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="PlayerList" component={PlayerScreen} options={{ title: 'Jugadores' }} />
        <Stack.Screen name="PlayerForm" component={PlayerForm} options={{ title: 'Añadir Jugador' }} />
        <Stack.Screen name="TeamList" component={TeamScreen} options={{ title: 'Equipos' }} />
        <Stack.Screen name="TeamForm" component={TeamScreen} options={{ title: 'Añadir Equipo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
