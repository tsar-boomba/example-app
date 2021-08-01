import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import NumberFormat from 'react-number-format';

import colors from '../config/colors';

interface CardProps {
    title: string;
    price: number;
    //coin doing good or bad
    pChange: number;
    id: number;
    navigation?: any;
};

const CoinCard = ({ title, price, pChange, id, navigation }: CardProps) => {
    const onCardPress = () => {
        navigation.navigate('CoinScreen', { coinId: id, pChange: pChange })
    };

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onCardPress}>
            <Text style={styles.title}>{title}</Text>
            <NumberFormat value={price} displayType={'text'} thousandSeparator={true} decimalScale={5} prefix={'$'} renderText={(value) => <Text style={styles.graphText}>{value}</Text>} />
            <View style={[styles.graph, pChange > 0 ? styles.graphBull : styles.graphBear]}>
                <NumberFormat value={pChange} displayType={'text'} decimalScale={2} suffix={'%'} renderText={(value) => <Text>{value}</Text>} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        width: 'auto',
        height: 60,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    graph: {
        backgroundColor: '#eaeaea',
        padding: 5,
        borderRadius: 5,
        width: 'auto'
    },
    graphBull: {
        backgroundColor: colors.bull,
    },
    graphBear: {
        backgroundColor: colors.bear,
    },
    graphText: {
        color: colors.light
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.light
    },
});

export default CoinCard;