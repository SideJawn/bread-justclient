import React, { Component } from 'react'
import './ProjectFeed.scss'
import Icon from "../../icons/icon"
import personImage from '../../images/person1.jpg'

export default class ProjectFeed extends Component {
    render() {
        return (
            <div class="colorlib-blog">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center colorlib-heading animate-box">
                            <h2>Trending Projects</h2>
                            <p>Check out the current projects people are recruiting for</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 card">
                            <article>
                                <h2>Building the Mention Sales Application on Unapp</h2>
                                <p class="status"><span>In Progress</span></p>
                                <p class="admin"><span>May 12, 2018</span></p>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                                <p class="author-wrap"><a href="#" class="author-img" style={{backgroundImage: `url(${personImage})`}}></a> <a href="#" class="author">by Dave Miller</a></p>
                                <p class="expand-btn">Tap to explore positions</p>
                            </article>
                        </div>
                        <div class="col-md-4 card">
                            <article>
                                <h2>Building the Mention Sales Application on Unapp</h2>
                                <p class="status"><span>In Progress</span></p>
                                <p class="admin"><span>May 12, 2018</span></p>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                                <p class="author-wrap"><a href="#" class="author-img" style={{backgroundImage: `url(${personImage})`}}></a> <a href="#" class="author">by Dave Miller</a></p>
                                <p class="expand-btn">Tap to explore positions</p>
                            </article>
                        </div>
                        <div class="col-md-4 card">
                            <article>
                                <h2>Building the Mention Sales Application on Unapp</h2>
                                <p class="status"><span>In Progress</span></p>
                                <p class="admin"><span>May 12, 2018</span></p>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                                <p class="author-wrap"><a href="#" class="author-img" style={{backgroundImage: `url(${personImage})`}}></a> <a href="#" class="author">by Dave Miller</a></p>
                                <p class="expand-btn">Tap to explore positions</p>
                            </article>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 card">
                            <article>
                                <h2>Building the Mention Sales Application on Unapp</h2>
                                <p class="status"><span>In Progress</span></p>
                                <p class="admin"><span>May 12, 2018</span></p>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                                <p class="author-wrap"><a href="#" class="author-img" style={{backgroundImage: `url(${personImage})`}}></a> <a href="#" class="author">by Dave Miller</a></p>
                                <p class="expand-btn">Tap to explore positions</p>
                            </article>
                        </div>
                        <div class="col-md-4 card">
                            <article>
                                <h2>Building the Mention Sales Application on Unapp</h2>
                                <p class="status"><span>In Progress</span></p>
                                <p class="admin"><span>May 12, 2018</span></p>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                                <p class="author-wrap"><a href="#" class="author-img" style={{backgroundImage: `url(${personImage})`}}></a> <a href="#" class="author">by Dave Miller</a></p>
                                <p class="expand-btn">Tap to explore positions</p>
                            </article>
                        </div>
                        <div class="col-md-4 card">
                            <article>
                                <h2>Building the Mention Sales Application on Unapp</h2>
                                <p class="status"><span>In Progress</span></p>
                                <p class="admin"><span>May 12, 2018</span></p>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                                <p class="author-wrap"><a href="#" class="author-img" style={{backgroundImage: `url(${personImage})`}}></a> <a href="#" class="author">by Dave Miller</a></p>
                                <p class="expand-btn">Tap to explore positions</p>
                            </article>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="explore-p"><a href="#" class="btn btn-primary btn-outline with-arrow">Explore <Icon color="white" size={20} className="explore-button" icon="arrow-right2"/></a></p>
                </div>
            </div>
        )
    }
}