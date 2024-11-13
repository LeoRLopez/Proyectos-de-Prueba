import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { Player } from '../models/Player';
import { PlayerScreenNavigationProp } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';

const PlayerList = () => {
    const navigation = useNavigation<PlayerScreenNavigationProp>();
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'jugadores'),
            (snapshot: QuerySnapshot) => {
                const playersData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Player[];
                setPlayers(playersData);
            });

        return () => unsubscribe();
    }, []);

    return (
        <View>
            <ScrollView>
                {players.map(player => (
                    <View key={player.id} style={styles.listItem}>
                        <View style={styles.listItemHeader}>
                            <Image source={{ uri: player.avatar }} style={styles.avatar} />
                            <Text style={styles.name}>{player.name + " " + player.surname}
                            </Text>
                        </View>
                        <Text style={styles.details}>Categoría: {player.category}</Text>
                        <Text style={styles.details}>Equipo: {player.team}</Text>
                        <Text style={styles.details}>Ciudad: {player.city}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlayerDetails",  {player})}> 
                            <Text style={styles.buttonText}>Ver Detalles</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 16,
    },
    listItem: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    listItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ccc',
        marginRight: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    details: {
        fontSize: 14, color: '#666', marginTop: 4,
    }, button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 12,
    }, buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PlayerList;
