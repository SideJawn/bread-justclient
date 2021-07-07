import React from 'react';
import { Helmet } from 'react-helmet'
import {NavBar, Footer } from '../components'
import './index.scss'
import './icomoon.css'

const Layout = (props) => (
    <div>
        <Helmet>
            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <title>bread | Home Page</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
            <meta name="author" content="" />
        </Helmet>
        {props.children}
    </div>
);

export { Layout, NavBar, Footer };