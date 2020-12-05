import React from 'react';

import './registration1.styles.css';

import Input from '../input/input.component';

import Registration2 from '../registration2/registration2.component';

import axios from 'axios';

class Registration1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showComponent: true,
          name:'',
          a_num:'',
          email:'',
          password:''
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
      handleChange = (e) =>{
        this.setState({
          [e.target.name]:e.target.value,
          [e.target.a_num]:e.target.value,
          [e.target.email]:e.target.value,
          [e.target.password]:e.target.value
        })
      }
      handleSubmit = (e) =>{
        e.preventDefault();
        const name=this.state.name;
        const a_num=this.state.a_num;
        const email=this.state.email;
        const password=this.state.password;

        const data=[
          name,
          a_num,
          email,
          password
        ]
        let url='https://api-rhpositive.herokuapp.com/bloodbank/add-donor/';
        axios.post(url,data)
        .then(res =>{
          console.log(res);
        })
        .catch(err => console.log(err));
      };
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
            <div className="registration1-conatiner">
              <div className="bar">
                    <div className="inner-bar"></div>
              </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
               <Input type='text' placeholder='Enter your name' id='name' value={this.state.name} onChange={this.handleChange.bind(this)} registrationInput/>
               <small>Name should be as per aadhar card</small>
               <Input type='number' placeholder='Enter Aadhar number' id='a_num' value={this.state.a_num} onChange={this.handleChange.bind(this)} registrationInput/>
               <Input type='email' placeholder='Enter your email' id='email' value={this.state.email} onChange={this.handleChange.bind(this)} registrationInput/>
               <Input type='password' placeholder='Choose password' id='password' value={this.state.password} onChange={this.handleChange.bind(this)} registrationInput/>
               <button type='button' onClick={() => this._onButtonClick()}>Enter</button>
               
                {/* <input type='submit'/> */}
            </form>
        </div> 
            :
           <Registration2/>
          }
        </div>

        )
    }
}

export default Registration1;