import React, { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Switch, RadioButton, TextInput } from 'react-native-paper';
import { Text } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-paper-dropdown';
import { Provider as PaperProvider } from 'react-native-paper';


const PlayerForm = () => {
    const [name, setName] = useState('');
    const [surname, setSurame] = useState('');
    const [age, setAge] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState<string>();;
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [gender, setGender] = useState('Masculino');
    const [isDelegate, setIsDelegate] = useState(false);
    const [category, setCategory] = useState<string>();
    const [team, setTeam] = useState<string>();
    
    const provinces = [
        {
            label: 'Chaco',
            value: 'chaco'
        },
        {
            label: 'Corrientes',
            value: 'corrientes'
        },
        {
            label: 'Formosa',
            value: 'formosa'
        },
        {
            label: 'Misiones',
            value: 'misiones'
        },
        {
            label: 'Santiago del Estero',
            value: 'santiago del estero'
        },
        {
            label: 'Tucumán',
            value: 'tucuman'
        },
        {
            label: 'Salta',
            value: 'salta'
        },
        {
            label: 'Jujuy',
            value: 'jujuy'
        },
        {
            label: 'Catamarca',
            value: 'catamarca'
        },
        {
            label: 'La Rioja',
            value: 'la rioja'
        },
        {
            label: 'Córdoba',
            value: 'cordoba'
        },
        {
            label: 'San Luis',
            value: 'san luis'
        },
        {
            label: 'La Pampa',
            value: 'la pampa'
        },
        {
            label: 'Mendoza',
            value: 'mendoza'
        },
        {
            label: 'Neuquén',
            value: 'neuquen'
        },
        {
            label: 'Buenos Aires',
            value: 'buenos aires'
        },
        {
            label: 'Río Negro',
            value: 'rio negro'
        },
        {
            label: 'Tirra del Fuego',
            value: 'tierra del fuego'
        },
        {
            label: 'San Juan',
            value: 'san juan'
        },
        {
            label: 'Santa Fe',
            value: 'santa fe'
        },
        {
            label: 'Entre Ríos',
            value: 'entre rios'
        },
        {
            label: 'Chubut',
            value: 'chubut'
        },
        {
            label: 'Santa Cruz',
            value: 'santa cruz'
        },
        {
            label: 'Ciudad Autónoma de Buenos Aires',
            value: 'caba'
        }
    ]

    const categories = [
        {
            label: "+40",
            value: "40"
        },
        {
            label: "+50",
            value: "50"
        },
        {
            label: "+60",
            value: "60"
        },
        {
            label: "+70",
            value: "70"
        },
    ]

    //TODO: este array deberá rellenarse con los equipos guardados en la BD
    const teams = [
        {
            label: "Leones",
            value: "leones"
        },
        {
            label: "Libertad",
            value: "libertad"
        },
        {
            label: "Unión",
            value: "union"
        }
    ]

    const onToggleSwitch = () => setIsDelegate(!isDelegate);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, 'jugadores'), {
                name: name,
                surname: surname,
                age: parseInt(age),
                document: parseInt(dni),
                contact: { email:email, phone:phone },
                city: city,
                gender: gender,
                isDelegate: isDelegate,
                team: team,
                category: category,
                province: province
            });

            setName('');
            setSurame('');
            setAge('');
            setEmail('');
            setPhone('');
            setGender('Masculino');
            setIsDelegate(false);
            setDni("");
            setTeam("");
            setCategory("");
            setCity("");
            setProvince("");
        } catch (e) {
            console.error("Error al insertar el archivo: ", e)
        }
    };

    return (
        <PaperProvider>
            <ScrollView>
                <View style={styles.container}>
                    <TextInput style={styles.textInput} mode='outlined' placeholder="Nombre" value={name} onChangeText={setName} />
                    <TextInput style={styles.textInput} mode='outlined' placeholder="Apellido" value={surname} onChangeText={setSurame} />
                    <TextInput style={styles.textInput} mode='outlined' placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />

                    <SafeAreaView style={{ alignItems: "center", marginBottom: 6 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text variant="headlineSmall">{date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}</Text>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={"date"}
                                is24Hour={true}
                                onChange={onChange}
                            />
                        )}
                        <Button onPress={showDatepicker} title="Fecha de nacimiento" />
                    </SafeAreaView>
                    <TextInput style={styles.textInput} mode='outlined' placeholder="Documento" value={dni} onChangeText={setDni} keyboardType="numeric" />

                    <View style={{ flexDirection: "row", padding: 4, marginTop: 4, alignItems: "center" }}>
                        <Text variant='titleLarge'>Masculino</Text>
                        <RadioButton
                            value="Masculino"
                            status={gender === 'Masculino' ? 'checked' : 'unchecked'}
                            onPress={() => { setGender('Masculino') }}
                        />

                        <Text variant='titleLarge'>Femenino</Text>
                        <RadioButton
                            value="Femenino"
                            status={gender === 'Femenino' ? 'checked' : 'unchecked'}
                            onPress={() => { setGender('Femenino') }}
                        />
                    </View>

                    <TextInput style={styles.textInput} mode='outlined' placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
                    <TextInput style={styles.textInput} mode='outlined' placeholder="Telefono" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
                    <TextInput style={styles.textInput} mode='outlined' placeholder="Ciudad" value={city} onChangeText={setCity} keyboardType="default" />
                    <View style={styles.dropdownContainer}>
                        <Dropdown
                            placeholder='Seleccione Provincia'
                            options={provinces}
                            value={province}
                            onSelect={setProvince}
                            mode='outlined'
                            menuContentStyle={{ backgroundColor: "#fdf6e2" }}
                        />
                    </View>
                    <View style={styles.dropdownContainer}>
                        <Dropdown
                            placeholder='Seleccione Equipo'
                            options={teams}
                            value={team}
                            onSelect={setTeam}
                            mode='outlined'
                            menuContentStyle={{ backgroundColor: "#fdf6e2" }}
                        />
                    </View>
                    <View style={styles.dropdownContainer}>
                        <Dropdown
                            placeholder='Seleccione Categoría'
                            options={categories}
                            value={category}
                            onSelect={setCategory}
                            mode='outlined'
                            menuContentStyle={{ backgroundColor: "#fdf6e2" }}
                        />
                    </View>

                    <View style={{ flexDirection: "row", padding: 4, marginTop: 4 }}>
                        <Text style={{ margin: 9 }} variant='titleLarge'>Es Delegado</Text>
                        <Switch value={isDelegate} onValueChange={onToggleSwitch} />
                    </View>

                    <View style={styles.buttonSaveContainer}>
                        <Button title="Guardar Jugador" onPress={handleSubmit} />
                    </View>
                </View>
            </ScrollView>

        </PaperProvider>
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
    textInput: {
        padding: 1,
        marginTop: 2
    },
    buttonSaveContainer: {
        position: "relative",
        bottom: 0,
        width: '100%',
        marginTop: 8,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    dropdownContainer:{
        marginTop:2
    }
});

export default PlayerForm;
