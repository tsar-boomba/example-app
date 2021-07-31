import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, View, StatusBar, StyleSheet, Text } from 'react-native';
import NumberFormat from 'react-number-format';

import colors from '../../config/colors';
import { CoinScreenNavigationProp, CoinScreenRouteProp } from '../../config/types';

type Props = {
    route: CoinScreenRouteProp;
    navigation: CoinScreenNavigationProp;
};

const CoinScreen: React.FC<Props> = ({ route, navigation }) => {
    const { coinId, pChange } = route.params
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData]: any = useState();
    
    const apiKey = apikey;
    const endpoint = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=';
    const qString = '&id=' + JSON.stringify(coinId)
    
    const getMetadata = async () => {
        try{
            const response = await fetch(endpoint + apiKey + qString);
            const json = await response.json();
            setData(json.data[coinId]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        };
    };

    useEffect(() => {getMetadata()}, []);

    return (
        <View style={styles.container}>
            {
                isLoading ? <ActivityIndicator /> :
                <View style={styles.titleContainer}>
                    <Image source={{ uri: data.logo, width: 48, height: 48 }} /> 
                    <Text style={styles.title}>{data.name} ({data.symbol})</Text>
                    <View style={[styles.graph, pChange > 0 ? styles.graphBull : styles.graphBear]}>
                        <NumberFormat value={pChange} displayType={'text'} decimalScale={2} suffix={'%'} renderText={(value) => <Text>{value}</Text>} />
                    </View>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: StatusBar.currentHeight,
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
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        flex: -1
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
    }
})

export default CoinScreen;