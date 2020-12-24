//  this file would only be for development and not production
import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 1608698641960,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -106.0694037406152 + increment * tenMetersWithDegrees,
            latitude: 39.65830113971167 + increment * tenMetersWithDegrees,
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter),
    });
    counter++;
}, 1000);