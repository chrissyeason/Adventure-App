import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/adventures',
        component: AdventuresContainer,
    },
    {
        path: '/chat',
        component: Chat,
    }
]

export default routes;