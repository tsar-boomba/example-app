import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

const WelcomeScreen: React.FC = ({ navigation }: any) => {
    const onLoginPress = () => {
        navigation.navigate('Login');
    }

    const onRegisterPress = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/almonds-logo.jpg')} />
                <Text style={styles.logoText}>Invest in Crypto</Text>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={onRegisterPress}>
                <View><Text style={styles.buttonText}>Register</Text></View> 
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logoText: {
        fontSize: 40
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WelcomeScreen;