import React, { Component } from 'react'
import './Footer.scss'

export default class footer extends Component {
    render() {
        return (
		<footer id="colorlib-footer">
			<div className="container">
				<div className="row row-pb-md">
					<div className="col-md-3 colorlib-widget" id="footer-nav">
						<h4>Navigation</h4>
							<ul className="colorlib-footer-links">
								<li><a href="#">Home</a></li>
								<li><a href="#">Profile</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Categories</a></li>
								<li><a href="#">Contact</a></li>
								<li><a href="#">Learn</a></li>
							</ul>
					</div>
					<div className="col-md-3 colorlib-widget" id="footer-contact">
						<h4>Contact Info</h4>
						<ul className="colorlib-footer-links">
							<li>123 Girard Street, <br></br> Suite 1 Pennsylvania PA 19125</li>
							<li><a href="tel://1234567920">(Insert Number Here)</a></li>
							<li><a href="mailto:team_bread@bread.net">(Instert e-mail Here)</a></li>
							<li><a href="#">(Insert Web-Address Here)</a></li>
						</ul>
					</div>
					<div className="col-md-3 colorlib-widget">
						<h4>About bread</h4>
						<p className="about-paragraph">We are here to help you help yourself. Find a project that interests you. Apply for the position you want. Work the project to completion. Add it to your resume and most importantly, create your own experience.</p>
					</div>
				</div>
			</div>
			<div className="copy">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<p>
								Template is licensed under CC BY 3.0.
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made by <a href="https://colorlib.com" target="_blank">Colorlib. </a>
								Link back to Colorlib can't be removed. 
                                <br></br>
								Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a>, <a href="http://pexels.com/" target="_blank">Pexels</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
        )
    }
}