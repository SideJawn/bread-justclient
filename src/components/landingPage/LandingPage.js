import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import WelcomeSection from '../welcomeSection/WelcomeSection'
import GeneralIntroduction from '../generalIntroduction/GeneralIntroduction'
import ProjectFeed from '../projectFeed/ProjectFeed'
import Footer from '../footer/Footer'
import FlowIntroduction from '../flowIntroduction/FlowIntroduction'
import './LandingPage.scss'

const NavBar = () => {
    return (
        <div>
            Nav goes here.
        </div>
    )
}

const Body = () => {
    return (
        <div>
            <WelcomeSection/>
            <GeneralIntroduction/>
            <FlowIntroduction/>
            <ProjectFeed/>
        </div>
    )
}

export default class LandingPage extends Component {
    render() {
        return (
            <div id="page">
                <Helmet>
                    <meta charset="utf-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <title>bread | Home Page</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <meta name="author" content="" />
                </Helmet>
                <NavBar/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}



