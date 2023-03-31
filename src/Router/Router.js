import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About/About';
import LandingPage from '../Pages/LandingPage/LandingPage';
import MarketPlace from '../Pages/MarketPlace/MarketPlace';
import Resource from '../Pages/Resoruce/Resource';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/resource" element={<Resource />}></Route>
            <Route path="/market" element={<MarketPlace />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    );
};

export default Router;