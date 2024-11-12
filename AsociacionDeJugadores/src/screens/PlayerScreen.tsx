import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PlayerList from '../components/PlayerList';
import { useNavigation } from '@react-navigation/native';
import { PlayerScreenNavigationProp } from '../types/navigation'

function PlayerScreen () {
  const navigation = useNavigation<PlayerScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Jugadores</Text>
      <PlayerList />
      <Button 
        title="Añadir Jugador" 
        onPress={() => navigation.navigate("PlayerForm")} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default PlayerScreen;
