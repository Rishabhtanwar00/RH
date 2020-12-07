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
          showComponent: true,
          [e.target.name]: e.target.value,
          [e.target.a_num]: e.target.value,
          [e.target.email]: e.target.value,
          [e.target.password]: e.target.value
        })
      }
      async handleSubmit(e){
        e.preventDefault();
        try{
            console.log(this.state);
            let form_data = new FormData();
            form_data.append('name', this.state.name);
            form_data.append('a_num', this.state.a_num);
            form_data.append('email', this.state.email);
            form_data.append('password', this.state.password);
            let url = 'https://api-rhpositive.herokuapp.com/bloodbank/add-donor/';
            axios.post(url, form_data, {
              headers: {
                  'content-type': 'application/json'
              }
             })
            .then(response =>{ 
              alert("hello1");
               console.log(response.data)
              })
        }
            catch(e){
            console.log(e);
        }
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
            <div className="registration1-conatiner">
              <div className="bar">
                    <div className="inner-bar"></div>
              </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" name="name" placeholder='Enter your name' id='name' value={this.state.value} onChange={this.handleChange}/>
               <small>Name should be as per aadhar card</small>
               <input type='number' name='a_num' placeholder='Enter Aadhar number' id='a_num' value={this.state.value} onChange={this.handleChange}/>
               <input type='email' name='email' placeholder='Enter your email' id='email' value={this.state.value} onChange={this.handleChange}/>
               <input type='password' name='password' placeholder='Choose password' id='password' value={this.state.value} onChange={this.handleChange}/>
               {/* <button type='button' onClick={() => this._onButtonClick()}>Enter</button> */}
               
                <input type='submit'/>
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