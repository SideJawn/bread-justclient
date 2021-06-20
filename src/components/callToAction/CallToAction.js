import React, { Component } from 'react'
import './CallToAction.scss'
import Button from '../../sub-components/button/Button'

export default class CallToAction extends Component {
    render() {
        return (
            <div id="colorlib-cta" className="colorlib-cta" style={{backgroundImage: 'url(${background})'}} data-stellar-background-ratio="0.5">
			<div className="overlay-cta"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-md-offset-0 text-center colorlib-heading-cta">
						<h2>Join the entrepreneurial movement</h2>
					</div>
				</div>
				<div className="animate-box text-center">
					<div className="col-md-12 col-md-offset-0 ">
						<p><Button title = "Let's get this bread."/></p>
						<div>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</div>
        )
    }
}