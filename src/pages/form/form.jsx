import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event){
      try{
          let result=await fetch('https://api-rhpositive.herokuapp.com/bloodbank/add-donor/',{
              method: 'post',
              headers:{
                  'Accept': 'application/json',
                  'content-type':'application/json'
              },
              body: JSON.stringify(this.state)
          }).then(function(response){
            console.log("result" +result);
            return response.json();
          })
          console.log("result" +result);
      }catch(e){
          console.log(e);
      }
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default NameForm;