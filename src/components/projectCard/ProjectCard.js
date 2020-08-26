import React, { Component } from 'react'
import './ProjectCard.scss'
import personImage from '../../images/person1.jpg'

export default class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : 'Building the Mention Sales Application on Unapp',
            status : 'In Progress',
            datePosted : 'May 12, 2018',
            summary : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            author : 'Dave Miller',
        };
    }

    render() {
        return (
            <div class="col-md-4">
                <article>
                    <h2>{this.state.title}</h2>
                    <p class="status"><span>{this.state.status}</span></p>
                    <p class="admin"><span>{this.state.datePosted}</span></p>
                    <p>{this.state.summary}</p>
                    <p class="author-wrap"><a href="#" class="author-img" style={{backgroundImage: `url(${personImage})`}}></a> <a href="#" class="author">by {this.state.author}</a></p>
                    <p class="expand-btn">Tap to explore positions</p>
                </article>
            </div>
        )
    }
}
