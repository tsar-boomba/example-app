import React from 'react';
import { useState } from 'react';
import { Button, Image, View, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native';

import colors from '../config/colors'

function LoginScreen({ navigation }: any) {
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/almonds-logo.jpg')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeUsername}
                    value={username}
                    placeholder='Username'
                    autoCapitalize='none'
                />
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder='Password'
                    autoCapitalize='none'
                />
                <TouchableHighlight style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableHighlight>
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
        width: '30%',
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

export default LoginScreen;