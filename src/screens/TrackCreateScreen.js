import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';


const TrackCreateScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;