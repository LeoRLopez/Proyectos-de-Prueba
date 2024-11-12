import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { Player } from '../models/Player';


const PlayerList = () => {
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
            {players.map(player => (
                <View key={player.id}>
                    <Text>{player.name}</Text>
                </View>
            ))}
        </View>
    );
};

export default PlayerList;
