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
	
	// rightNav = () => {
	// 	return (
	// 	  <ul>
	// 		<li>Home</li>
	// 		<li>About Us</li>
	// 		<li>Contact Us</li>
	// 		<li>Sign In</li>
	// 		<li>Sign Up</li>
	// 	  </ul>
	// 	)
	// }
	  
	// offcanvasMenu = () => {
	// 	<div id="colorlib-offcanvas" />
	// 	$('#page').prepend('');
	// 	$('#page').prepend('<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>');
	// 	var clone1 = $('.menu-1 > ul').clone();
	// 	$('#colorlib-offcanvas').append(clone1);
	// 	var clone2 = $('.menu-2 > ul').clone();
	// 	$('#colorlib-offcanvas').append(clone2);

	// 	$('#colorlib-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
	// 	$('#colorlib-offcanvas')
	// 		.find('li')
	// 		.removeClass('has-dropdown');

	// 	// Hover dropdown menu on mobile
	// 	$('.offcanvas-has-dropdown').mouseenter(function(){
	// 		var $this = $(this);

	// 		$this
	// 			.addClass('active')
	// 			.find('ul')
	// 			.slideDown(500, 'easeOutExpo');				
	// 	}).mouseleave(function(){

	// 		var $this = $(this);
	// 		$this
	// 			.removeClass('active')
	// 			.find('ul')
	// 			.slideUp(500, 'easeOutExpo');				
	// 	});


	// 	$(window).resize(function(){

	// 		if ( $('body').hasClass('offcanvas') ) {

    // 			$('body').removeClass('offcanvas');
    // 			$('.js-colorlib-nav-toggle').removeClass('active');
				
	//     	}
	// 	});
	// }

	// burgerMenu = () => {
	// 	$('body').on('click', '.js-colorlib-nav-toggle', function(event){
	// 		var $this = $(this);


	// 		if ( $('body').hasClass('overflow offcanvas') ) {
	// 			$('body').removeClass('overflow offcanvas');
	// 		} else {
	// 			$('body').addClass('overflow offcanvas');
	// 		}
	// 		$this.toggleClass('active');
	// 		event.preventDefault();

	// 	});
	// }

    render() {
        return (
            <nav class="colorlib-nav" role="navigation">
			<div class="top-menu">
				<div style={{backgroundColor: "#29313c", height:"50px"}}>
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