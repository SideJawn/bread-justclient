import React, { Component } from 'react'
import './VideoSection.scss'
import Icon from "./../../icons/icon"

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
                    <div class="row">
                        <div class="col-md-12 animate-box">
                            <span class="play"><a href="" class="pulse popup-vimeo"><Icon color="white" size={30} className="play-button" icon="play3"/></a></span>
                        </div>
                    </div>
                </div>
		    </div>
        )
    }
}






























