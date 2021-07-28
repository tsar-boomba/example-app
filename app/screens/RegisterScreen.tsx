import React from 'react';
import { useState } from 'react';
import { Button, Image, View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

const RegisterScreen: React.FC = ({ navigation }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');

    const onRegisterPress = () => {
        // auth stuff goes here
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/almonds-logo.jpg')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    placeholder='Username'
                    autoCapitalize='none'
                />
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder='Password'
                    autoCapitalize='none'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.submitButton} onPress={onRegisterPress}>
                    <Text style={styles.submitButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    },
    input: {
        height: 40,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        top: StatusBar.currentHeight
    },
    submitButton: {
        width: 'auto',
        padding: 5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'center'
    },
    submitButtonText: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default RegisterScreen;