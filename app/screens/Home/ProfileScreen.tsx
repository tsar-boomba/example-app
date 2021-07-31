import React from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';

import colors from '../../config/colors'
import { ProfileScreenNavigationProp, ProfileScreenRouteProp } from '../../config/types';

type Props = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
};

const ProfileScreen: React.FC<Props> = ({ route, navigation }) => {
    const { username } = route.params

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{username}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>This is {username}'s profile</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 15
    },
    bodyText: {
        fontSize: 20,
    },
    container: {
        flex: 1,
        top: StatusBar.currentHeight
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
    }
});

export default ProfileScreen;