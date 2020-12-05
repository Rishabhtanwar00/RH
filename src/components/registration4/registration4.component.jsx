import React from 'react';

import './registration4.styles.css';

import CheckBox from '../checkbox/checkbox.component';

import Registration5 from '../registration5/registration5.component';

import RadioButton from '../radiobutton/radiobutton.component';

class Registration4 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showComponent: true,
          anydisease:''
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
      radioChangeHandler = (event) => {

        this.setState({
          anydisease : event.target.value
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
            <div className="registration4-container">
              <div className="bar">
                    <div className="inner-bar"></div>
              </div>
              <div className='registration4-details'>
               <p>Have you any reason to believe that you may be infected by either Hepatits, HIV/AIDS, and/or venereal disease?</p>
               <div className="radio-buttons3">
                <RadioButton className='radio-button'
                        changed={ this.radioChangeHandler } 
                        id="01" 
                        isSelected={ this.state.anydisease==='yes'} 
                        label="Yes" 
                        value="yes" 
                    /> 
                    <RadioButton  className='radio-button'
                        changed={ this.radioChangeHandler } 
                        id="02" 
                        isSelected={ this.state.anydisease === "no" } 
                        label="No" 
                        value="no" 
                    />
                </div>
                <p>In the latest 6 months have you had any history of the following?</p>
               <div className="checkbox-container">
                <div className="checkbox-container1">
                <CheckBox id='1' name='Unexplained weight loss' value='Unexplained weight loss'/>
                <CheckBox id='2' name='Swollen glands' value='Swollen glands'/>
                <CheckBox id='3' name='Acupunture' value='Acupunture'/>
                <CheckBox id='4' name='Tattooing' value='Tattooing'/>
                <CheckBox id='5' name='Minor surgery' value='Minor surgery'/>
                </div>
                <div className="checkbox-container2">
                <CheckBox id='6' name='Repeated Diarrhoea' value='Repeated Diarrhoea'/>
                <CheckBox id='7' name='Ear Piercing' value='Ear Piercing'/>
                <CheckBox id='8' name='Continuous low-grade fever' value='Continuous low-grade fever'/>
                <CheckBox id='9' name='Dental Extraction' value='Dental Extraction'/>
                <CheckBox id='10' name='Blood transfusion' value='Blood transfusion'/>
                </div>
               </div>
               <button onClick={() => this._onButtonClick()}>Enter</button>
            </div>
        </div> 
            :
           <Registration5/>
          }
        </div>

        )
    }
}

export default Registration4;