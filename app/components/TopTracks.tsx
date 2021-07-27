import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import useSWR from "swr";
import fetcher from '../api/Fetcher';
import Track from './Track';

const TopTracks = ( {iterator} ) => {
    const { data, revalidate } = useSWR('/api/top-tracks', fetcher);
    const timeFrames = ['Long Term', 'Medium Term', 'Short Term'];

    if (!data) {
        return null
    };

    if (iterator <= 0) {
        return (
            <div>

                <h2>Long Term</h2>
                <div className={styles.grid}>
                    {data.timeFrames.longTerm.map((track, index) => (
                            <Track ranking={index + 1} key={track.songUrl} {...track} />
                    ))}
                </div>
            </div>
        );
    } else if (iterator === 1) {
        return (
            <div>
                <h2>Medium Term</h2>
                <div className={styles.grid}>
                    {data.timeFrames.medTerm.map((track, index) => (
                            <Track ranking={index + 1} key={track.songUrl} {...track} />
                    ))}
                </div>
            </div>
        );
    } else if (iterator === 2) {
        return (
            <div>

                <h2>Short Term</h2>
                <div className={styles.grid}>
                    {data.timeFrames.shortTerm.map((track, index) => (
                            <Track ranking={index + 1} key={track.songUrl} {...track} />
                    ))}
                </div>
            </div>
        );
    };
};

export default TopTracks;
