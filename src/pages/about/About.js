import React from 'react';
import { Layout } from '../../layout';
import PageHeader from '../../components/pageHeader/PageHeader'
import background from '../../images/annie-spratt-Teamwork.jpg'

const About = () => (
    <Layout>
        <PageHeader background={background} header='About Us' 
        subHeader={<p class="breadcrumbs"><span><a href="/">Home</a></span> <span>About bread</span></p>}/>
    </Layout>
);

export default About;