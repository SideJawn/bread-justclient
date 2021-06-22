import React, { Component } from 'react'
import './LandingPage.scss'
import {PageHeader, FlowIntroduction, VideoSection, ProjectFeed } from '../../components'
import background from '../../images/marvin-meyer-IndexWorkSpace-unsplash.jpg'
import { Layout } from '../../layout'
import Button from '../../sub-components/button/Button'

export default class LandingPage extends Component {
    render() {
        return (
            <Layout>
                <PageHeader background={background} header='Welcome to the best hustler recruitment platform' 
        subHeader={<div><p>by Hustlers, for Hustlers</p>
            <p><Button title = "Join now"/></p></div>}/>
                <VideoSection/>
                <FlowIntroduction/>
                <ProjectFeed quantity = {6}/>
            </Layout>
        )
    }
}



