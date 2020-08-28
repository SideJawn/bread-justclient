import React, { Component } from 'react'
import './Button.scss'

export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button class="btn btn-primary btn-lg">{this.props.title}</button>
        )
    }
}




