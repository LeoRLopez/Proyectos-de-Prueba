import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const PlayerForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, 'players'), {
                name,
                age: parseInt(age),
                contact: { email, phone },
                teamId: '', // Actualiza con el ID del equipo
                gender: '', // Actualiza con el género correspondiente
            });

            // Limpiar el Formulario
            setName('');
            setAge('');
            setEmail('');
            setPhone('');
        } catch (e) {
            console.error("Error al insertar el archivo: ", e)
        }
    };

    return (
        <View>
            <TextInput placeholder="Name" value={name} onChangeText={setName} />
            <TextInput placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
            <Button title="Save Player" onPress={handleSubmit} />
        </View>
    );
};

export default PlayerForm;
