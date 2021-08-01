import React from 'react';
import { useState } from 'react';
import { Alert, Image, View, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import colors from '../config/colors'
import { RegisterScreenNavigationProp } from '../config/types';

type Props = {
    navigation: RegisterScreenNavigationProp;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');

    const onRegisterPress = () => {
        // auth stuff goes here
        if (username === '') {
            Alert.alert('Please input a valid username', 'Input anything');
            return;
        };
        navigation.navigate('Home', { username: username });
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
                    placeholderTextColor={colors.light}
                    autoCapitalize='none'
                />
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    placeholder='Username'
                    placeholderTextColor={colors.light}
                    autoCapitalize='none'
                />
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor={colors.light}
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
        backgroundColor: colors.dark
    },
    input: {
        height: 40,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.light,
        color: colors.light
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
        fontWeight: 'bold',
        color: colors.light
    }
});

export default RegisterScreen;