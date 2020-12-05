import React from 'react';

import './aboutpagehome2.styles.css';

import CustomButton from '../custombutton/custombutton.component';

import AboutSvg from '../../assets/about-svg.png';

const AboutPageHome2 =() =>{
    return(
        <div className="aboutpage-home2">
            <div className="aboutpagehome2-content">
                <p className="aboutpagehome2-heading">Everyone is superhero now, are you?</p>
                <p>We have a team of experienced and professional people,join us to become superhero</p>
                <CustomButton home2Button>Join us</CustomButton>
            </div>
            <div className="aboutpagehome2-image">
                <img src={AboutSvg} alt="svg"/>
            </div>
        </div>
    )
}
export default AboutPageHome2;