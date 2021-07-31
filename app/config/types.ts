import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams, RouteProp } from '@react-navigation/native';

export type StackParamsList = {
	Welcome: undefined;
	Register: undefined;
	Login: undefined;
	Home: { username: string };
	CoinScreen: { coinId: number, pChange: number};
};

export type WelcomeScreenNavigationProp = StackNavigationProp<
    StackParamsList,
    'Welcome'
>;

export type RegisterScreenNavigationProp = StackNavigationProp<
    StackParamsList,
    'Register'
>;

export type LoginScreenNavigationProp = StackNavigationProp<
    StackParamsList,
    'Login'
>;

export type HomeScreenRouteProp = RouteProp<
    StackParamsList,
    'Home'
>;

export type HomeScreenNavigationProp = StackNavigationProp<
    StackParamsList,
    'Home'
>;

//Home tab types
export type HomeParamsList = {
    Home: NavigatorScreenParams<StackParamsList>;
    Feed: undefined;
    Profile: { username: string };
};

export type FeedScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<HomeParamsList, 'Feed'>,
    StackNavigationProp<StackParamsList>
>;

export type ProfileScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<HomeParamsList,'Profile'>,
    StackNavigationProp<StackParamsList>
>;

export type ProfileScreenRouteProp = RouteProp<
    HomeParamsList,
    'Profile'
>;
//Back to normal stack

export type CoinScreenRouteProp = RouteProp<
    StackParamsList,
    'CoinScreen'
>;

export type CoinScreenNavigationProp = StackNavigationProp<
    StackParamsList,
    'CoinScreen'
>;