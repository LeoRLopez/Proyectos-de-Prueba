import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PlayerList from '../components/PlayerList';
import { useNavigation } from '@react-navigation/native';
import { PlayerScreenProps } from '../types/navigation'

const PlayerScreen: React.FC<PlayerScreenProps> = () => {
  const navigation = useNavigation<PlayerScreenProps['navigation']>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Jugadores</Text>
      <PlayerList />
      <Button 
        title="Añadir Jugador" 
        onPress={() => navigation.navigate('PlayerForm')} 
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
