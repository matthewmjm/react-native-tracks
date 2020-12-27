import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const {
        state: { currentLocation, locations }
    } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
    }

    return (
        <MapView 
            style={styles.map}
            initialRegion={{
                // ...currentLocation.coords,
                speed: 0.18608365952968597,
                heading: 304.1404623733985,
                accuracy: 30.591114053984132,
                altitudeAccuracy: 14.988318214255786,
                altitude: 2717.5548491094105,
                longitude: -106.0694037406152,
                latitude: 39.65830113971167,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Circle 
                center={currentLocation.coords}
                radius={30}
                strokeColor='rgba(158, 158, 255, 1.0)'
                fillColor='rgba(158, 158, 225, 0.3)'
            />
            <Polyline coordinates={locations.map(loc => loc.coords)} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default Map;