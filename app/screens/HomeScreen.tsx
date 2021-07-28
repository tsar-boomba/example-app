import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet, StatusBar, Text, TextInput, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import CoinCard from '../components/CoinCard';

const HomeScreen: React.FC = ({ navigation }: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData]: any = useState();
    const [search, setSearch] = useState('');
    const bro = [{ name: 'Joe Coin', price: 0.78, growth: true}, { name: 'Doge Boin', price: 0.01, growth: false}, { name: 'BitCoin', price: 50679, growth: true}]

    const apiKey = process.env.CMC_API_KEY;
    const endpoint = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=';
    const qString = '&start=1&limit=10'
    
    const getCmcApi = async () => {
        try{
            const response = await fetch(endpoint + apiKey + qString);
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        };
    };

    useEffect(() => {getCmcApi()}, []);

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={(text) => setSearch(text)}
                value={search}
                placeholder='Search'
                autoCapitalize='none'
            />
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {isLoading ? <ActivityIndicator /> : data.map((coin: any, index: number) => {
                    return <CoinCard title={coin.name} price={coin.quote.USD.price} pChange={coin.quote.USD.percent_change_24h} key={coin.name} />
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        top: StatusBar.currentHeight
    },
    input: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2
    },
});

export default HomeScreen;