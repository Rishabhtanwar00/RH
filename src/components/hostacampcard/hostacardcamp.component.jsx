import React from 'react';

import './hostacampcard.styles.css';

import CampImage from '../../assets/svg-4.svg';

import CustomButton from '../custombutton/custombutton.component';

const HostACampCard = ()=>{
    return(
        <div className="host-card">
            <img className='card-image' src={CampImage} alt=""/>
            <p className="card-title">Host a Blood donation camp</p>
            <p className="description">You are one step closer to being a superhero. Organize a blood donation camp in your college,office,society and get that superman cape.</p>
            <CustomButton hostCardButton>Host A Camp</CustomButton>
        </div>
    )
}

export default HostACampCard;