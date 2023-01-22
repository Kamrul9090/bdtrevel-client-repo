import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/pages/Home/Home';

const Main = () => {
    return (
        <div>
            <Home></Home>
            {/* <Outlet></Outlet> */}

        </div>
    );
};

export default Main;