import React from 'react';

import './registration5.styles.css';

import CheckBox from '../checkbox/checkbox.component';

import Registration4 from '../registration4/registration4.component';

class Registration5 extends React.Component{
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
            <div className="registration5-container">
              <div className="bar">
                    <div className="inner-bar"></div>
              </div>
              <div className='registration5-details'>
                <p>Have you suffered any of the following?</p>
                <div className="checkbox-container">
                <div className="checkbox-container1">
                <CheckBox id='1' name='Chronic nephritis' value='Chronic nephritis'/>
                <CheckBox id='2' name='Lung disease' value='Lung disease'/>
                <CheckBox id='3' name='Typhoid' value='Typhoid'/>
                <CheckBox id='4' name='Pertussis' value='Pertussis'/>
                </div>
                <div className="checkbox-container2">
                <CheckBox id='5' name='Diabetics' value='Diabetics'/>
                <CheckBox id='6' name='Cholera' value='Cholera'/>
                <CheckBox id='7' name='Diphtheria' value='Diphtheria'/>
                <CheckBox id='8' name='Gamma Globulin' value='Gamma Globulin'/>
                </div>
               </div>
               <button onClick={() => this._onButtonClick()}>Submit</button>
            </div>
        </div> 
            :
           <Registration4/>
          }
        </div>

        )
    }
}

export default Registration5;