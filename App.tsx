import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';
import CoinScreen from './app/screens/Home/CoinScreen';
import Home from './app/screens/Home/Home';

import { StackParamsList } from './app/config/types';

const Stack = createStackNavigator<StackParamsList>();

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
					component={Home}
					options={{headerShown: false}}
				/>
				<Stack.Screen 
					name='CoinScreen'
					component={CoinScreen}
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;