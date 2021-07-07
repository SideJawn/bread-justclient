import React, { Component } from 'react'
import './ProjectFeed.scss'
import Icon from "../../icons/icon"
import ComponentHeader from '../../sub-components/componentHeader/ComponentHeader'
import ProjectCard from '../projectCard/ProjectCard'

export default class ProjectFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectsToDisplay: this.props.quantity,
            isLoading: true,
            error: null,
            projects: []
        };
    }

    populateProjectCards(data) {
        let projectArray = [];
            for (let i = 0; i < data.num_results; i++) {
                let project = data.results[i];
                projectArray.push(
                <ProjectCard title = {project.display_name} status = {project.status} datePosted = {project.created_ts} summary = {project.description} author = {project.f_name + " " + project.l_name}/>
                );
            }
        this.setState({
            isLoading: false,
            projects: projectArray
        });
    }

    componentDidMount() {
        let url = `/project?num_recs=` + this.state.projectsToDisplay + `&index=0`
        fetch(url, {mode:'no-cors'})
            .then(response => response.json())
            .then(data => this.populateProjectCards(data))
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        let title = 'Building the Mention Sales Application on Unapp';
        let status = 'I';
        let datePosted = 'May 12, 2018';
        let summary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        let author = 'Dave Miller';
        return (
            <div className="colorlib-blog">
                <div className="container">
                    <ComponentHeader header='Trending Projects' subHeader='Check out the current projects people are recruiting for'/>
                    {this.state.projects}
                    {/* Below is a visual dev placeholder */}
                    <ProjectCard title = {title} status = {status} datePosted = {datePosted} summary = {summary} author = {author}/>
                    <ProjectCard title = {title} status = {status} datePosted = {datePosted} summary = {summary} author = {author}/>
                    <ProjectCard title = {title} status = {status} datePosted = {datePosted} summary = {summary} author = {author}/>
                    <ProjectCard title = {title} status = {status} datePosted = {datePosted} summary = {summary} author = {author}/>
                    <ProjectCard title = {title} status = {status} datePosted = {datePosted} summary = {summary} author = {author}/>
                </div>
                <div>
                    <p className="explore-p"><a href="#" className="btn btn-primary btn-outline with-arrow">Explore <Icon color="white" size={20} className="explore-button" icon="arrow-right2"/></a></p>
                </div>
            </div>
        )
    }
}