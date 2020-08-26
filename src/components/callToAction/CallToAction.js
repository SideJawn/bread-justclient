import React, { Component } from 'react'
import './CallToAction.scss'

export default class CallToAction extends Component {
    render() {
        return (
            <div id="colorlib-cta" class="colorlib-cta" style={{backgroundImage: 'url(${background})'}} data-stellar-background-ratio="0.5">
			<div class="overlay-cta"></div>
			<div class="container-cta">
				<div class="row-cta">
					<div class="col-md-10 col-md-offset-1 text-center colorlib-heading-cta">
						<h2>Want to join the entrepreneurial movement?</h2>
					</div>
				</div>
				<div class="row-cta">
					<div class="col-md-6 col-md-offset-3">
						<div class="row-cta">
							<div class="col-md-12">
							<p class="qbstp-header-cta">
                                <button type="submit" class="btn-cta btn-primary-cta">Let's get this bread</button>
							</p>
                            <div>
                                <p></p>
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