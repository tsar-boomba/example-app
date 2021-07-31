import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from './FeedScreen';
import CoinScreen from './CoinScreen';
import ProfileScreen from './ProfileScreen';

import { HomeParamsList } from '../../config/types';
import { HomeScreenRouteProp } from '../../config/types';

const Tab = createBottomTabNavigator<HomeParamsList>();

type Props = {
    route: HomeScreenRouteProp;
};

const Home = ({ route }: Props) => {
    return (
            <Tab.Navigator>
                <Tab.Screen
                    name='Feed'
                    component={FeedScreen}
                />
                <Tab.Screen
                    name='Profile'
                    component={ProfileScreen}
                    initialParams={route.params}
                />
            </Tab.Navigator>
    );
}

export default Home;