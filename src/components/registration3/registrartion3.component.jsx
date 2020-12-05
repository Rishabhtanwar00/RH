import React from 'react';

import './registration3.styles.css';

import Input from '../input/input.component';

import Registration4 from '../registration4/registration4.component';

import RadioButton from '../radiobutton/radiobutton.component';

class Registration3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showComponent: true,
          married:'',
          donated:''
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
      radioChangeHandler = (event) => {

        this.setState({
          married : event.target.value,
          donated : event.target.value
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
            <div className="registration3-conatiner">
              <div className="bar">
                    <div className="inner-bar"></div>
              </div>
            <form>
               <Input type='text' placeholder='Father name' registrationInput/>
               <div className="radio-buttons1">
                <RadioButton className='radio-button'
                        changed={ this.radioChangeHandler } 
                        id="5" 
                        isSelected={ this.state.married==='married'} 
                        label="Married" 
                        value="married" 
                    /> 
                    <RadioButton  className='radio-button'
                        changed={ this.radioChangeHandler } 
                        id="6" 
                        isSelected={ this.state.married === "unmarried" } 
                        label="Unmarried" 
                        value="unmarried" 
                    />
                </div>
                <p>Did you donate blood earlier?</p>
                <div className="radio-buttons2">
                   <RadioButton className='radio-button'
                        changed={ this.radioChangeHandler } 
                        id="3" 
                        isSelected={ this.state.donated==='yes'} 
                        label="Yes" 
                        value="yes" 
                    /> 
                    <RadioButton  className='radio-button'
                        changed={ this.radioChangeHandler } 
                        id="4" 
                        isSelected={ this.state.donated === "no" } 
                        label="No" 
                        value="no" 
                    />
                </div>
                <p>Date of donation:</p>
               <Input type='date' placeholder='Date of donation' registrationInput/>
               <Input type='email' placeholder='Place of donation' registrationInput/>
               <button onClick={() => this._onButtonClick()}>Enter</button>
            </form>
        </div> 
            :
           <Registration4/>
          }
        </div>

        )
    }
}

export default Registration3;