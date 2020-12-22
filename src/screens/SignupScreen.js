import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';  

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');


    return (
        <View style={styles.container}>
            <Spacer>
                <Text h2>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer>
                <Input 
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Email" 
                    value={email} 
                    onChangeText={(newEmail) => setEmail(newEmail)}
                />
            </Spacer>
            <Spacer>
                <Input 
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    label="Password"
                    value={password} 
                    onChangeText={(newPassword) => setPassword(newPassword)}
                />
            </Spacer>
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button 
                    title="Sign Up"
                    onPress={() => signup({ email, password }) }
                />
            </Spacer>
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    }
});

export default SignupScreen;

