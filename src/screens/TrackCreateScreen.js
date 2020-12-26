import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, NavigationEvents, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation);

    console.log(isFocused);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            {/* <NavigationEvents onWillBlur={() => console.log("LeAvInG!!") } /> */}
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};


export default withNavigationFocus(TrackCreateScreen);