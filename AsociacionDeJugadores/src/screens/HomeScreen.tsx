import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { HomeScreenNavigationProp } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  useEffect(() => {
    console.log('HomeScreen rendered');
  }, []);

  const showAlert = (message: string) => {
    Alert.alert('Navigating', message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestión de Jugadores</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('PlayerScreen')
        }
      >
        <Text style={styles.buttonText}>Lista de Jugadores</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('PlayerForm');
        }}
      >
        <Text style={styles.buttonText}>Añadir Jugador</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('TeamList');
        }}
      >
        <Text style={styles.buttonText}>Lista de Equipos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('TeamForm');
        }}
      >
        <Text style={styles.buttonText}>Añadir Equipo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
