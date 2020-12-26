import React, { useContext } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
            <FlatList 
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() =>
                                navigation.navigate('TrackDetail', { _id: item._id })
                            }
                        >
                            <ListItem.Title>{item.name}</ListItem.Title> 
                        </TouchableOpacity>
                    );
                }}
            /> 
        </>
    );
};

// TrackListScreen.navigationOptions = {
//     header: () => false,
// };


const styles = StyleSheet.create({
    list: {
        color: 'red'
    }
});

export default TrackListScreen;