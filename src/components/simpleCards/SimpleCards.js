import React, { Component } from 'react'
import hai from '../../images/hai-profile.jpg'
import christian from '../../images/christian-iosif-profile.jpg'
import './SimpleCards.scss'

export default class SimpleCards extends Component {
	
    render() {
        return (
            <div class="row">
				<div className="container">
					<div class="simple-card col-md-3 text-center animate-box">
						<div class="staff-entry">
							<a class="staff-img" style={{backgroundImage: `url(${christian})`}}></a> 
							<div class="desc">
								<h3>Christian Iosif</h3>
								<span>CEO</span>
								<p>While working as a software developer at URBN, I lead the creation of this website because I'm passionate about eliminating obstacles between people and their maximum potential.</p>
								<p>
									<ul class="colorlib-social-icons">
										<li><a href="#"><i class="icon-twitter"></i></a></li>
										<li><a href="#"><i class="icon-facebook"></i></a></li>
										<li><a href="#"><i class="icon-linkedin"></i></a></li>
										<li><a href="#"><i class="icon-dribbble"></i></a></li>
									</ul>
								</p>
							</div>
						</div>
					</div>
					<div class="simple-card col-md-3 text-center animate-box">
						<div class="staff-entry">
							<a class="staff-img" style={{backgroundImage: `url(${hai})`}}></a>
							<div class="desc">
								<h3>Hai Thai</h3>
								<span>CTO</span>
								<p>I am an engineer manager at Comcast and the founder of Tech Cycle. Ten people without internet access is too much. The way I see this is you change one person’s life, they’ll change another life, or another 10.</p>
								<p>
									<ul class="colorlib-social-icons">
										<li><a href="#"><i class="icon-twitter"></i></a></li>
										<li><a href="#"><i class="icon-facebook"></i></a></li>
										<li><a href="#"><i class="icon-linkedin"></i></a></li>
										<li><a href="#"><i class="icon-dribbble"></i></a></li>
									</ul>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
}