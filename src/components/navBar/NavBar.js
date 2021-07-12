import React, { Component } from 'react'
import './NavBar.scss'
import Burger from '../../sub-components/burger/Burger.js'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import {SignUpModal} from '../../components'

export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isDisplayed: "none",
			isAnimated: "",
			isToggleOn : false
		};
		this.handleClick = this.handleClick.bind(this);
	}
    handleOpen = () => {
        this.setState({isDisplayed: "block"})
        this.setState({isAnimated: "animated-fast fadeInUpMenu"})
    }
    handleClose = () => {
        this.setState({isDisplayed: "none"})
        this.setState({isAnimated: ""})
	}
	handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
          });
    }

	// populateCategories(data) {
	// 	let categoriesArray = [];
	// 	for (let i = 0; i < data.num_results; i++) {
	// 		let category = data.results[i];
	// 		categoriesArray.push(
	// 			<li><a href="/category">{category.display_name}</a></li>
	// 		);
	// 	}
	// 	this.setState({
	// 		isLoading: false,
	// 		categoriesData: data.results,
	// 		categoryNames: categoriesArray
	// 	});

	// }

	// componentDidMount() {
    //     let url = `/categories`
    //     fetch(url, {mode:'no-cors'})
    //         .then(response => response.json())
    //         .then(data => this.populateCategories(data))
    //         // Catch any errors we hit and update the app
    //         .catch(error => this.setState({ error, isLoading: false }));
    // }

    render() {
        return (
            <nav className="colorlib-nav" role="navigation">
			<Burger href="javascript:void(0)" handleClick={this.handleClick}/>
			<SignUpModal isToggleOn={this.state.isToggleOn} handleClick={this.handleClick} />
			<div className="top-menu">
				<div style={{backgroundColor: "#29313c", height:"50px"}}>
					<div className="row">
                        <div className="col-md-4 text-left menu-1" style={{fontSize: "20px", marginTop: "3px"}}>
							<ul>
								<li><Link to="/about">About</Link></li>
                                    <li className="has-dropdown"onMouseEnter = { this.handleOpen }
                                        onMouseLeave = { this.handleClose }>
										<a href="/category">
                                            Categories </a>
	                  					<ul id="dropdown"className={this.state.isAnimated} style={{display: this.state.isDisplayed}}>
											<li><a href="/category">Tech</a></li>
											<li><a href="/category">Gadgets</a></li>
											<li><a href="/category">Entertainment</a></li>
											<li><a href="/category">Lifestyle</a></li>
											<li><a href="/category">Environment</a></li>
										</ul>
                  					</li>
							</ul>
						</div>
						<div className="col-md-4 " style={{textAlign: "center", fontSize: "20px", marginTop: "6px"}} id="colorlib-logo"><Link to="/">bread</Link></div>
						<div className="text-right menu-1" style={{marginTop: "8px", marginRight: "18px"}}>
							<ul>
								<li><a href="">create</a></li>
								<li><a href="">log in</a></li>
								{/* <li><a style={{cursor:'pointer'}} onClick={this.handleClick}>sign up</a></li> */}
								<li><Button variant="primary" onClick={this.handleClick} centered>
								Sign Up
								</Button></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
        )
    }
}