import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Player } from '../models/Player';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type PlayerDetailsRouteProp = RouteProp<RootStackParamList, 'PlayerDetails'>;

const PlayerDetails = () => {
    const route = useRoute<PlayerDetailsRouteProp>();
    const {player} = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: player.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{player.name}</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Edad:</Text>
                    <Text style={styles.detailValue}>{player.age}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Email:</Text>
                    <Text style={styles.detailValue}>{player.contact.email || ""}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Teléfono:</Text>
                    <Text style={styles.detailValue}>{player.contact.phone || ""}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Dirección:</Text>
                    <Text style={styles.detailValue}>{player.address}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Ciudad:</Text>
                    <Text style={styles.detailValue}>{player.city}</Text>
                </View>
            </View>
            {/* <TouchableOpacity style={styles.button} onPress={onEdit}>
                <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#f8f8f8',
            padding: 16,
        },
        avatar: {
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: 'center',
            marginVertical: 16,
        },
        name: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#333',
        },
        detailsContainer: {
            marginVertical: 16,
        },
        detailItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
        },
        detailLabel: {
            fontWeight: 'bold',
            color: '#666',
            marginRight: 8,
        },
        detailValue: {
            color: '#333',
        },
        button: {
            backgroundColor: '#007bff',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 12,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
        },
    });
export default PlayerDetails;
