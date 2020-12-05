import React from 'react';

import './aboutcardcollection.styles.css';

import AboutCard from '../aboutcard/aboutcard.component';

import Items from './aboutcardcollection.data';


const AboutCardCollection =()=>{  
    
        return(
         <div className="aboutcard-collection">
             {
                 Items.map(AboutCard)
             }
         </div>
    )
}

export default AboutCardCollection;