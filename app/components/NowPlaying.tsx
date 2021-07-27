import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, Alert } from 'react-native';
import useSWR from 'swr';
import fetcher from '../api/fetcher';

const NowPlaying: any = () => {
    const { data } = useSWR('/api/now-playing', fetcher);

    if (!data) {
        return null
    };

    if (data.isPlaying === true) {
        return (
            <View>
                <TouchableHighlight onPress={() => console.log('Now Playing Tapped')}>
                    <Image source={{ uri: data.songUrl, width: 64, height: 64 }} /><Text>NowPlaying {data.title}</Text>
                </TouchableHighlight>
            </View>

        );
    };

    if (data.isPlaying === false) {
        return (
            <View>
                <Image source={{ uri:'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png', width: 64, height: 64 }} /><Text>Not listening to anything</Text>
            </View>
        );
    };
};

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

export default NowPlaying;