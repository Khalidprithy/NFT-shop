import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';


const MyContext = createContext();

function MyContextProvider(props) {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    console.log(products)
    const contextValue = {
        products,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    );
}

export { MyContext, MyContextProvider };