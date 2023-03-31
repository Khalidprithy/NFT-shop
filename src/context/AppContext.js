import React, { createContext, useState } from 'react';
import { useQuery } from 'react-query';

const MyContext = createContext();

function MyContextProvider(props) {



    const { data, isLoading, error } = useQuery('myData', () =>
        fetch('api').then((res) =>
            res.json()
        )
    );

    console.log(data)


    const contextValue = {
        data,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    );
}

export { MyContext, MyContextProvider };