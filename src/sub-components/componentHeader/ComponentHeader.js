import React, { Component } from 'react'

export default class ComponentHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header : this.props.header,
            subHeader : this.props.subHeader
        };
    }

    render() {
        return (
            <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                <h2>{this.state.header}</h2>
                <p>{this.state.subHeader}</p>
            </div>
        </div>
        )
    }
}