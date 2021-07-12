import React, {Component} from 'react'
import {SlideDown} from 'react-slidedown'
import Icon from "../../icons/icon"
import './Burger.scss'
import 'react-slidedown/lib/slidedown.css'

export default class Burger extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isMenuDisplayed : false,
        isCategoriesClosed : true,
        menuClass : "js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white",
        categoryStyle : "none"
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isMenuDisplayed) {
        this.toggleBurger();
      }
    }
  }

  toggleBurger = () => {
    if(this.state.isMenuDisplayed){
      this.setState({
        menuClass : "js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white",
        isMenuDisplayed : false,
        isCategoriesClosed : true
      });
      document.body.style.overflow = "";
    }
    else {
      this.setState({
        menuClass : "active js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white",
        isMenuDisplayed : true
      });
      document.body.style.overflow = "hidden";
    }
  }

  toggleCategories = () => {
    this.setState({
      isCategoriesClosed : !this.state.isCategoriesClosed
    });
  }

  handleSignUpClick = () => {
    this.toggleBurger();
    this.props.handleClick();
  }

  render(){
    return (
      <div ref={this.setWrapperRef} className={this.state.isMenuDisplayed ? "overflow offcanvas" : ""}>
          <a href='#' onClick= {this.toggleBurger} className={this.state.menuClass}><i></i></a>
          <div id="colorlib-offcanvas">
            <ul>
              <li><a href="">About</a></li>
              <li className="" >
                <a onClick= {this.toggleCategories}>Categories <Icon color="white" className="dropdown-icon" size={10} icon="circle-down"/></a>
                  <SlideDown className={'pure-menu pure-menu-scrollable dropdown-slidedown'} closed={this.state.isCategoriesClosed}>
                    <ul>
                      <li><a href="">Tech</a></li>
                      <li><a href="">Gadgets</a></li>
                      <li><a href="">Entertainment</a></li>
                      <li><a href="">Lifestyle</a></li>
                      <li><a href="">Environment</a></li>
                    </ul>
                  </SlideDown>
              </li>
            </ul>
            <hr className="menu-division"/>
            <ul className="actions">
              <li><a href="">log in</a></li>
              <li><a style={{cursor:'pointer'}} onClick={this.handleSignUpClick}>sign up</a></li>
              <li><a href="">create</a></li>
            </ul>
          </div>
      </div>
    )
  }
}