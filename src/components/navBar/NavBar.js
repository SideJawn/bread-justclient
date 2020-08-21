import React, { Component } from 'react'
import './NavBar.scss'

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisplayed: "none",
            isAnimated: ""
        };
    }
    handleOpen = () => {
        this.setState({isDisplayed: "block"})
        this.setState({isAnimated: "animated-fast fadeInUpMenu"})
    }
    handleClose = () => {
        this.setState({isDisplayed: "none"})
        this.setState({isAnimated: ""})
    }

    render() {
        return (
            <nav class="colorlib-nav" role="navigation">
			<div class="top-menu">
				<div style={{backgroundColor: "#29313c", borderRadius:"20px", height:"50px"}}>
					<div class="row">
                        <div class="col-md-4 text-left menu-1" style={{fontSize: "20px", marginTop: "3px"}}>
							<ul>
								<li><a href="/about">About</a></li>
                                    <li class="has-dropdown"onMouseEnter = { this.handleOpen }
                                        onMouseLeave = { this.handleClose }>
										<a href="/category">
                                            Categories </a>
	                  					<ul id="dropdown"class={this.state.isAnimated} style={{display: this.state.isDisplayed}}>
											<li><a href="/category">Tech</a></li>
											<li><a href="/category">Gadgets</a></li>
											<li><a href="/category">Entertainment</a></li>
											<li><a href="/category">Lifestyle</a></li>
											<li><a href="/category">Environment</a></li>
										</ul>
                  					</li>
							</ul>
						</div>
						<div class="col-md-4 " style={{textAlign: "center", fontSize: "20px", marginTop: "6px"}} id="colorlib-logo"><a href="/">bread</a></div>
						<div class="text-right menu-1" style={{marginTop: "8px", marginRight: "18px"}}>
							<ul>
								<li><a href="">log in</a></li>
								<li><a href="">sign up</a></li>
								<li><a href="">create</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
        )
    }
}