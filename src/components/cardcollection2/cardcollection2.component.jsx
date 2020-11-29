import React from 'react';

import './cardcollection2.styles.css';

import {Card2} from '../card/card.component';

import Items from './cardcollection2.data.js';


const CardCollection2 =()=>{  
    
        return(
         <div className="collection2">
             {
                 Items.map(Card2)
             }
         </div>
    )
}

export default CardCollection2;