import React from 'react';

import './about.styles.css';

import Navbar from '../../components/navbar/navbar.component';

import AboutPageHome1 from '../../components/aboutpagehome1/aboutpagehome1.component';

import AboutCardCollection from '../../components/aboutcardcollection/aboutcardcollection.component';

import AboutPageHome2 from '../../components/aboutpagehome2/aboutpagehome2.component';

import Footer from '../../components/footer/footer.component';

import NavbarForMobile from '../../components/navbarformobile/navbar.component';

const AboutPage=() =>{
    return(
    <div className="aboutpage-container">
        <Navbar/>
        <AboutPageHome1/>
        <AboutCardCollection/>
        <AboutPageHome2/>
        <Footer/>
        <NavbarForMobile/>
    </div>
    )
}

export default AboutPage;