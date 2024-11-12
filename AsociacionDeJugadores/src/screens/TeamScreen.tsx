import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TeamScreenNavigationProp } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
// Importa el componente de lista de equipos cuando esté listo

const TeamScreen: React.FC = () => {
  const navigation = useNavigation<TeamScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Equipos</Text>
      {/* Aquí iría el componente TeamList */}
      <Button 
        title="Añadir Equipo" 
        onPress={() => navigation.navigate('TeamForm')} 
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

export default TeamScreen;
