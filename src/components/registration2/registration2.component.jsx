import React from 'react';

import './registration2.styles.css';

import Input from '../input/input.component';

import RadioButton from '../radiobutton/radiobutton.component';

import Registration3 from '../registration3/registrartion3.component';

class Registration2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showComponent: true,
          gender:''
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
      radioChangeHandler = (event) => {

        this.setState({
          gender : event.target.value
        });
    }
    
      _onButtonClick() {
        this.setState({
          showComponent: false
        });
      }
    render(){
    return(
        <div>
          {
            this.state.showComponent?
            <div className="registration2-container">
              <div className="bar">
                    <div className="inner-bar"></div>
              </div>
                <Input type='date' placeholder='DOB' registrationInput/>
                <div className="radio-buttons">
                <RadioButton className='radio-button'
                        changed={ this.radioChangeHandler } 
                        id="1" 
                        isSelected={ this.state.gender==='male'} 
                        label="Male" 
                        value="male" 
                    /> 
                    <RadioButton  className='radio-button'
                        changed={ this.radioChangeHandler } 
                        id="2" 
                        isSelected={ this.state.gender === "female" } 
                        label="Female" 
                        value="female" 
                    />
                    <RadioButton className='radio-button' 
                        changed={ this.radioChangeHandler } 
                        id="3" 
                        isSelected={ this.state.gender === "transgender" } 
                        label="Transgender" 
                        value="transgender" 
                    />
                </div>
                <Input type='number' placeholder='Enter your mobile number' registrationInput/>
                <Input type='text' placeholder='Blood group' registrationInput/>
                <textarea name="Address" id="address" cols="37" rows="8" placeholder='Address'></textarea>
                <button onClick={() => this._onButtonClick()}>Enter</button>
            </div>:
           <Registration3/>
          }
        </div>
    )
    }
}

export default Registration2;