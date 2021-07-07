import React from 'react';
import { Layout } from '../../layout';
import background from '../../images/annie-spratt-Teamwork.jpg';
import {ComponentHeader} from '../../sub-components';
import {PageHeader, MediaParagraph, SimpleCards} from '../../components';

let header = 'Meet the founders';
let subheader = 'If you would like to join our efforts, contact us!';

const About = () => (
    
    <Layout>
        <PageHeader background={background} header='About Us' 
        subHeader={<p class="breadcrumbs"><span><a href="/">Home</a></span> <span>About bread</span></p>}/>
        <div class="container">
        <MediaParagraph/>
        <ComponentHeader header={header} subHeader={subheader}/>
        <SimpleCards/>
        </div>
    </Layout>
);

export default About;