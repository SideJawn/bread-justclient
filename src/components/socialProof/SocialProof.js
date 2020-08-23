import React, { Component } from 'react'
import './SocialProof.scss'

// Animation elements removed until APIs are created and linkled

export default class SocialProof extends Component {
    render() {
        return(
        <div id="colorlib-counter" class="colorlib-counters" style={{backgroundImage: 'url(${background})'}} data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
                        <div>
                            <h2 class="reinforcement">Use bread to cultivate your own skills with projects that you’re passionate about.</h2>
                        </div>
						<div class="col-md-4 col-sm-4 text-center"> 
							<div class="counter-entry">
								<span class="icon"><i class="flaticon-ribbon"></i></span>
								<div class="desc">
									<span class="colorlib-counter js-counter" data-from="0" data-to="1500" data-speed="5000" data-refresh-interval="50"></span>
									<span class="colorlib-counter-label">Projects created so far.</span>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-4 text-center">
							<div class="counter-entry">
								<span class="icon"><i class="flaticon-church"></i></span>
								<div class="desc">
									<span class="colorlib-counter js-counter" data-from="0" data-to="500" data-speed="5000" data-refresh-interval="50"></span>
									<span class="colorlib-counter-label">Users joining and creating projects.</span>
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