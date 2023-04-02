import React, { createContext } from 'react';
import { useQuery } from 'react-query';

const MyContext = createContext();

function MyContextProvider(props) {


    const { data, isLoading, error } = useQuery('myData', () =>
        fetch('https://todo-server-ze08.onrender.com/crypto').then((res) =>
            res.json()
        )
    );

    const filteredItems = data?.filter((item) => item.category === "art");
    console.log(filteredItems)

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