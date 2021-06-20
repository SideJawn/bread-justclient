import React, { Component } from 'react'
import './ProjectCard.scss'
import personImage from '../../images/person1.jpg'

export default class ProjectCard extends Component {
    constructor(props) {
        super(props);
        const statusDict = {
            N : 'New',
            A : 'Active',
            S : 'Suspended',
            R : 'Recruiting',
            C : 'Complete',
            I : 'In Progress'
        };
        this.state = {
            title : this.props.title,
            status : statusDict[this.props.status],
            datePosted : this.props.datePosted,
            summary : this.props.summary,
            author : this.props.author
        };
    }

    render() {
        var date = new Date(this.state.datePosted);
        return (
            <div className="project-card">
                <article>
                    <h2>{this.state.title}</h2>
                    <p className="status"><span>{this.state.status}</span></p>
                    <p className="admin"><span>{date.toDateString()}</span></p>
                    <p>{this.state.summary}</p>
                    <div className="project-footer">
                    <p className="author-wrap"><a href="#" className="author-img" style={{backgroundImage: `url(${personImage})`}}></a> <a href="#" className="author">by {this.state.author}</a></p>
                    {/* <p className="expand-btn">Tap to explore positions</p> */}
                    </div>
                </article>
            </div>
        )
    }
}