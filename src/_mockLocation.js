import * as Location from 'expo-location';
//  this file would only be for development and not production

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 1608837667397,
        coords: {
            speed: 0.18608365952968597,
            heading: 304.1404623733985,
            accuracy: 30.591114053984132,
            altitudeAccuracy: 14.988318214255786,
            altitude: 2717.5548491094105,
            longitude: -106.0694037406152 + increment * tenMetersWithDegrees,
            latitude: 39.65830113971167 + increment * tenMetersWithDegrees,
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);