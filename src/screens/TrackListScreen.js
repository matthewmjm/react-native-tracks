import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { SafeAreaView } from 'react-navigation';

const TrackListScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>TrackListScreen</Text>
            <Button 
                title="Go to Track Detail"
                onPress={() => navigation.navigate('TrackDetail')}
            />
        </SafeAreaView>
    )
};

TrackListScreen.navigationOptions = {
    header: () => false,
};


const styles = StyleSheet.create({});

export default TrackListScreen;