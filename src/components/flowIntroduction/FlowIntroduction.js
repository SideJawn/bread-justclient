import React, { Component } from 'react'
import "../flowIntroduction/FlowIntroduction.scss"
import Icon from '../../icons/icon'

export default class VideoSection extends Component {
    render() {
        return (
            <div class="colorlib-services colorlib-bg-white">
                <div class="container">
                    <div class="row">
                    <div class="col-md-4 text-center">
                            <div class="services">
                                <span class="icon">
                                <Icon color="#798eea" size={65} icon="file-text"/>
                                </span>
                                <div class="desc">
                                    <h3>Post your projects</h3>
                                    <p>Projects become more valuable when others interact with them.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center">
                            <div class="services">
                                <span class="icon">
                                    <Icon color="#798eea" size={65} icon="users"/>
                                </span>
                                <div class="desc">
                                    <h3>Build your teams</h3>
                                    <p>Passionate people gravitate towards projects you are also passionate about.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center">
                            <div class="services">
                                <span class="icon">
                                    <Icon color="#798eea" size={65} icon="meter"/>
                                </span>
                                <div class="desc">
                                    <h3>Drive your progress</h3>
                                    <p>Progress can come from a driven person, but it accelerates with driven people.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
