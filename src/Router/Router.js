import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage/LandingPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
        </Routes>
    );
};

export default Router;