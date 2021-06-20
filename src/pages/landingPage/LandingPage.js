import React, { Component } from 'react'
import './LandingPage.scss'
import {WelcomeSection, FlowIntroduction, VideoSection, ProjectFeed } from '../../components'
import { Layout } from '../../layout'

export default class LandingPage extends Component {
    render() {
        return (
            <Layout>
                <WelcomeSection/>
                <VideoSection/>
                <FlowIntroduction/>
                <ProjectFeed quantity = {6}/>
            </Layout>
        )
    }
}



