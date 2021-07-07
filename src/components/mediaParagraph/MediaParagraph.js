import React, { Component } from 'react'
import background from '../../images/about.jpg'
import './MediaParagraph.scss';

export default class MediaParagraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header : this.props.header,
            subHeader : this.props.subHeader
        };
    }

    render() {
        return (
            <div class="row row-pb-lg">
					<div id="about-paragraph" class="col-md-6 animate-box">
						<h2>Let's get this bread</h2>
						<p>According to the Urban Dictionary, the phrase was originally used to mean "let's get money" as bread=dough, and dough is a common slang term for money. Nowadays, the term "let's get this bread" is more loosely defined as a sort of battlecry in a sense, calling upon the will of the person(s) to succeed.</p>
						<p>Bread is a platform that enables people to work on projects they care about. This is a place where like-minded individuals can join eachother on their entrepreneurial journies to finding meaningful work. SideJawn as a company will be working directly with our users to find out exactly what they need to recruit, start, and complete valuable projects.</p>
					</div>
				</div>
        )
    }
}