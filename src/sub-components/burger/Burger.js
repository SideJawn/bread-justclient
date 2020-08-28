import React, {Component} from 'react';
import './Burger.scss'

export default class Burger extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isDisplayed : "none",
        isAnimated : "",
        isMenuDisplayed : false,
        menuClass : "js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"
    };
  }
  handleOpen = () => {
      this.setState({isDisplayed : "block"})
      this.setState({isAnimated : "active"})
  }
  handleClose = () => {
      this.setState({isDisplayed : "none"})
      this.setState({isAnimated : ""})
  }
  toggleBurger = () => {
    if(this.state.isMenuDisplayed){
      this.setState({
        menuClass : "js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white",
        isMenuDisplayed : false
      });
    }
    else {
      this.setState({
        menuClass : "active js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white",
        isMenuDisplayed : true
      });
    }
  }
  render(){
    return (
      <div class={this.state.isMenuDisplayed ? "overflow offcanvas" : ""}>
          <a href="#" onClick= {this.toggleBurger} class={this.state.menuClass}><i></i></a>
          <div id="colorlib-offcanvas">
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">Tech</a></li>
              <li><a href="">Gadgets</a></li>
              <li><a href="">Entertainment</a></li>
              <li><a href="">Lifestyle</a></li>
              <li><a href="">Environment</a></li>
            </ul>
            <ul>
              <li><a href="">log in</a></li>
              <li><a href="">sign up</a></li>
              <li><a href="">create</a></li>
            </ul>
          </div>
      </div>
    )
  }
}