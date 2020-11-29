import React from 'react';

import './card.styles.css';

import CustomButton from '../custombutton/custombutton.component';



const Card=( card , index  ) => {
    return(
        <div className='card'  key={index}>
            <img src={card.imageURL} alt={`Svg-${card.id}`}/>
            <div className="content">
              <p className="title">{ card.title }</p>
              <p className="description">{ card.description }</p>
              <CustomButton className='button' cardButton>{card.buttonName}</CustomButton>
            </div>
        </div> 
    )
}
export const Card2=( card , index  ) => {
    return(
        <div className='card2'  key={index}>
            <img className='card2-img' src={card.imageURL} alt={`Svg-${card.id}`}/>
            <div className="content">
              <p className="title">{ card.title }</p>
              <p className="description">{ card.description }</p>
              <CustomButton className='button' card2Button>{card.buttonName}</CustomButton>
            </div>
        </div> 
    )
}

export default Card;