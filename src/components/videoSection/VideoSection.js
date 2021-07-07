import React, { Component } from 'react'
import './VideoSection.scss'
import Icon from "./../../icons/icon"

export default class VideoSection extends Component {
    render() {
        return (
            <div className="colorlib-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center colorlib-heading">
                            <h2>Recruit and create teams around projects you care about</h2>
                            <p>Bread is where new ideas and projects can gain initial structure and organization</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 animate-box">
                            <span className="play"><a href="" className="pulse popup-vimeo"><Icon color="white" size={30} className="play-button" icon="play3"/></a></span>
                        </div>
                    </div>
                </div>
		    </div>
        )
    }
}






























