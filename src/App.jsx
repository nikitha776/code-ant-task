import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import RepositoryPage from './components/RepositoryPage'

import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/repositories',
            element: <RepositoryPage />
        }
    ]);

    return (
        <div>
            <RouterProvider router = {appRouter} />
        </div>
    )
};

export default App;
