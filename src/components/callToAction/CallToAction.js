import React, { Component } from 'react'
import './CallToAction.scss'

export default class CallToAction extends Component {
    render() {
        return (
            <div id="colorlib-cta" class="colorlib-cta" style={{backgroundImage: 'url(${background})'}} data-stellar-background-ratio="0.5">
			<div class="overlay-cta"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-md-offset-0 text-center colorlib-heading-cta">
						<h2>Want to join the entrepreneurial movement?</h2>
					</div>
				</div>
				<div class="animate-box">
					<div class="col-md-12 col-md-offset-0">
								<p><a href="" class="btn btn-primary btn-lg btn-custom">Lets get this bread.</a></p>
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