import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import NumberFormat from 'react-number-format';

import colors from '../config/colors';

interface CardProps {
    title: string;
    price: number;
    //coin doing good or bad
    pChange: number;
}

const CoinCard = ({ title, price, pChange }: CardProps) => {
    //would have function to navigate a screen for each coin 

    return (
        <TouchableOpacity style={styles.cardContainer}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>{price}</Text> */}
            <NumberFormat value={price} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={'$'} renderText={(value) => <Text>{value}</Text>} />
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
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CoinCard;