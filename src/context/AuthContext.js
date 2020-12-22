import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
};

const clearErrorMessage = dispatch => ()=> {
    dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => {
    // make api request to signup with that email and password
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            // if we sign up, modify our state, and say that we were authenticated
            await AsyncStorage.setItem('token', response.data.token);
            dispatch( { type: 'signin', payload: response.data.token });
            // navigate to main flow
            navigate('TrackList');
            // if signing up fails, we probably need to reflect an error message
        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with SignUp" });
        }
    };
};

const signin = (dispatch) => {
    return async ({ email, password }) => {
        // make api request to signin with that email and password
        try {
            const response = await trackerApi.post('/signin', { email: email, password: password });
            // if we sign in, modify our state, and say that we were authenticated
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            // navigate to main flow
            navigate('TrackList');
            // if signing in fails, we probably need to reflect an error message
        } catch (err) {
            dispatch({ type: 'add_error', payload: "Something went wrong with SignIn" });
        }
    };
};

const signout = (dispatch) => {
    return ( ) => {
        // somehow sign-out


    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);