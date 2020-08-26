import React, { Component } from 'react'
import './ProjectFeed.scss'
import Icon from "../../icons/icon"
import ProjectCard from '../projectCard/ProjectCard'

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
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                    <div class="row">
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                </div>
                <div>
                    <p class="explore-p"><a href="#" class="btn btn-primary btn-outline with-arrow">Explore <Icon color="white" size={20} className="explore-button" icon="arrow-right2"/></a></p>
                </div>
            </div>
        )
    }
}