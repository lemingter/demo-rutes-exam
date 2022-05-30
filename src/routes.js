import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';

const  AppRoutes = () => {
    <App>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </App>
}

export default AppRoutes;