import React, { Component } from 'react'
import "../flowIntroduction/FlowIntroduction.scss"
import Icon from '../../icons/icon'

export default class VideoSection extends Component {
    render() {
        return (
            <div className="colorlib-services colorlib-bg-white">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 text-center">
                            <div className="services">
                                <span className="icon">
                                <Icon color="#798eea" size={65} icon="file-text"/>
                                </span>
                                <div className="desc">
                                    <h3>Post your projects</h3>
                                    <p>Projects become more valuable when others interact with them.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="services">
                                <span className="icon">
                                    <Icon color="#798eea" size={65} icon="users"/>
                                </span>
                                <div className="desc">
                                    <h3>Build your teams</h3>
                                    <p>Passionate people gravitate towards projects you are also passionate about.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="services">
                                <span className="icon">
                                    <Icon color="#798eea" size={65} icon="meter"/>
                                </span>
                                <div className="desc">
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
