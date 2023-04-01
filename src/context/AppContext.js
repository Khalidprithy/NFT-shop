import React, { createContext } from 'react';
import { useQuery } from 'react-query';

const MyContext = createContext();

function MyContextProvider(props) {



    const { data, isLoading, error } = useQuery('myData', () =>
        fetch('api').then((res) =>
            res.json()
        )
    );

    const contextValue = {
        data,
        isLoading,
        error
    };

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    );
}

export { MyContext, MyContextProvider };