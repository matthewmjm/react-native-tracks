import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => {
    // make api request to signup with that email and password
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            // if we sign up, modify our state, and say that we were authenticated
            await AsyncStorage.setItem('token', response.data.token);
            dispatch( { type: 'signup', payload: response.data.token });
            // navigate to main flow
            
            // if signing up fails, we probably need to reflect an error message
        } catch (err) {
            dispatch( { type: 'add_error', payload: "Something went wrong with SignUp" });
        }
        
    };
};

const signin = (dispatch) => {
    return async ({ email, password }) => {
        // make api request to signin with that email and password

        // if we sign in, modify our state, and say that we were authenticated

        // if signing in fails, we probably need to reflect an error message

    }
}
const signout = (dispatch) => {
    return ( ) => {
        // somehow sign-out
e

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout },
    { token: null, errorMessage: '' }
);