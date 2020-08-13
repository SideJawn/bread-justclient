import React from 'react'
import './WelcomeSection.css'
import background from '../../images/marvin-meyer-IndexWorkSpace-unsplash.jpg'

export default class WelcomeSection extends React.Component {
    render() {
        return (
            <section id="home" class="video-hero" style={{backgroundImage: `url(${background})`}} data-section="home">
                <div class="display-t text-center">
                    <div class="display-tc">
                        <div class="container">
                            <div class="col-md-12 col-md-offset-0">
                                <div class="animate-box">
                                    <h2>Welcome to the best hustler recruitment platform</h2>
                                    <p>by Hustlers, for Hustlers</p>
                                    <p><a href="" class="btn btn-primary btn-lg btn-custom">Join now</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
