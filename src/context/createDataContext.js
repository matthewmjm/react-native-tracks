import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, setState] = useReducer(reducer, defaultValue);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state: state, ...boundActions }}>
                { children }
            </Context.Provider>
        );
    };

    return { Context: Context, Provider: Provider };
};