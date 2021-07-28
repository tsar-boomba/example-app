import 'react-native-gesture-handler';
import React from 'react';
import { Alert, 
	Button, 
	StyleSheet, 
	Text, 
	TouchableHighlight, 
	View, 
	SafeAreaView, 
	StatusBar, 
	ImageBackground, 
	Image, 
	Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name='Welcome'
					component={WelcomeScreen}
					options={{headerShown: false}}
				/>
				<Stack.Screen 
					name='Register'
					component={RegisterScreen}
					options={{headerShown: false}}
				/>
				<Stack.Screen 
					name='Login'
					component={LoginScreen}
					options={{headerShown: false}}
				/>
				<Stack.Screen 
					name='Home'
					component={HomeScreen}
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue',
	},
	text: {
		color: 'white',
	}
});

export default App;