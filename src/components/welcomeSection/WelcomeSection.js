import React, { Component } from 'react'
import Button from '../../sub-components/button/Button'
import './WelcomeSection.css'
import background from '../../images/marvin-meyer-IndexWorkSpace-unsplash.jpg'

export default class WelcomeSection extends Component {
    render() {
        return (
            <section id="home" className="video-hero" style={{backgroundImage: `url(${background})`}} data-section="home">
                <div className="display-t text-center">
                    <div className="display-tc">
                        <div className="container">
                            <div className="col-md-12 col-md-offset-0">
                                <div className="animate-box">
                                    <h2>Welcome to the best hustler recruitment platform</h2>
                                    <p>by Hustlers, for Hustlers</p>
                                    <p><Button title = "Join now"/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
