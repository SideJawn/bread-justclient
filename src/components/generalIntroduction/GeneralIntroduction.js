import React, { Component } from 'react'
import "../generalIntroduction/GeneralIntroduction.scss"
// Icon Set: https://icomoon.io/app/#/select
//import {Glyphicon} from 'react-bootstrap';

export default class VideoSection extends Component {
    render() {
        return (
            <div class="colorlib-intro">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center colorlib-heading">
                            <h2>Build teams and businesses around projects you care about</h2>
                            <p>Bread is where we join entrepreneurial efforts to create our own projects and experiences.</p>
                        </div>
                    </div>
                    <div class="colorlib-services colorlib-bg-white">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 text-center animate-box">
                                    <div class="services">
                                        <span class="glyphicon">
                                            <i class="glyphicon-list-alt"></i>
                                        </span>
                                        <div class="desc">
                                            <h3>Share your ideas</h3>
                                            <p>The community will commit themselves to helping evolve your idea into a plan.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 text-center animate-box">
                                    <div class="services">
                                        <span class="glyphicon">
                                            <i class="glyphicon-user"></i>
                                        </span>
                                        <div class="desc">
                                            <h3>Build a team</h3>
                                            <p>Managers, engineers, marketers . . . <br></br> Really any position that your team needs will be filled.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 text-center animate-box">
                                    <div class="services">
                                        <span class="glyphicon">
                                            <i class="glyphicon-cloud-download "></i>
                                        </span>
                                        <div class="desc">
                                            <h3>Make ideas reality</h3>
                                            <p>Ideas will continue to be ideas without action. <br></br> Let's get this bread.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
        )
    }
}