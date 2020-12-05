import React from 'react';

import './checkbox.styles.css';

const CheckBox = (props) =>{
    return(
      <div className="checkbox">
          <input className='checkbox-custom' type="checkbox" name={props.name} id={props.id} value={props.value}/>
          <label htmlFor={props.id} className='checkbox-custom-label'>{props.name}</label>
      </div>
    )
}
export default CheckBox;


