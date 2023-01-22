import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/pages/Login/Login';
import SignUp from '../components/pages/Login/SignUp/SignUp';
import Main from '../layout/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/SignUp',
        element: <SignUp></SignUp>
    }
])

