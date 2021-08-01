import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, View, StyleSheet, StatusBar, RefreshControl, TextInput, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import CoinCard from '../../components/CoinCard';
import colors from '../../config/colors';
import { FeedScreenNavigationProp } from '../../config/types';

type Props = {
    navigation: FeedScreenNavigationProp;
};

const FeedScreen: React.FC<Props> = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData]: any = useState();
    const [search, setSearch] = useState('');

    const apiKey = cmckey;
    const endpoint = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=';
    const qString = '&start=1&limit=30';

    const stopBack = () => {
        navigation.addListener('beforeRemove', (e: any) => {
            e.preventDefault();
        });
    };
    
    const getListingData = async () => {
        try{
            setIsLoading(true);
            const response = await fetch(endpoint + apiKey + qString);
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        };
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getListingData().then(() => setRefreshing(false));
    }, []);

    useEffect(() => {stopBack()}, [navigation])
    useEffect(() => {getListingData()}, []);

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={(text) => setSearch(text)}
                value={search}
                placeholder='Search'
                placeholderTextColor={colors.light}
                autoCapitalize='none'
            />
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} enabled={true} />
            }>
                {isLoading ? <ActivityIndicator /> : data.map((coin: any, index: number) => {
                    return <CoinCard 
                    title={coin.name} 
                    price={coin.quote.USD.price} 
                    pChange={coin.quote.USD.percent_change_24h} 
                    id={coin.id} 
                    navigation={navigation} 
                    key={coin.id} />
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        top: StatusBar.currentHeight,
        backgroundColor: colors.dark
    },
    input: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.light
    },
});

export default FeedScreen;