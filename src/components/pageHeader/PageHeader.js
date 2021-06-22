import React, { Component } from 'react'
import './PageHeader.css'

export default class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background : this.props.background,
            header : this.props.header,
            subHeader : this.props.subHeader
        };
    }

    render() {
        return (
            <section id="home" class="video-hero" style={{backgroundImage: `url(${this.state.background})`}} data-section="home">
                <div class="display-t text-center">
                    <div class="display-tc display-tc2">
                        <div class="container">
                            <div class="col-md-12 col-md-offset-0">
                                <div class="animate-box">
                                    <h2>{this.state.header}</h2>
                                    {this.state.subHeader}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}		
