import React from "react";

import "./registration.page.styles.css";

import Navbar from "../../components/navbar/navbar.component";

import Svg7 from "../../assets/signup.png";

import RadioButton from "../../components/radiobutton/radiobutton.component";

import CheckBox from "../../components/checkbox/checkbox.component";

import NavbarForMobile from "../../components/navbarformobile/navbar.component";

import axios from "axios";

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      phone: "",
      email: "",
      a_num: "",
      address: "",
      dob: "",
      father: "",
      gender: "",
      marriage_status: "",
      bg: "",
      last_donated: "",
      veneral_diseases: "",
      any_disease: "",
      photo: null,
      error: true,
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.a_num]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.dob]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.bg]: e.target.value,
      [e.target.father]: e.target.value,
      [e.target.address]: e.target.value,
      [e.target.last_donated]: e.target.value,
    });
  };
  getCookie(name1) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Does this cookie string begin with the name1 we want?
        if (cookie.substring(0, name1.length + 1) === name1 + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name1.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      password: this.state.password,
      phone: this.state.phone,
      email: this.state.email,
      a_num: this.state.a_num,
      address: this.state.address,
      dob: this.state.dob,
      father: this.state.father,
      gender: this.state.gender,
      marriage_status: this.state.marriage_status,
      bg: this.state.bg,
      last_donated: this.state.last_donated,
      veneral_diseases: this.state.veneral_diseases,
      any_disease: this.state.any_disease,
    };
    const csrf_token = this.getCookie("csrftoken");
    let form_data = new FormData();
    form_data.append("photo", this.state.photo);
    form_data.append("data", JSON.stringify(data));
    console.log(data);
    let url = "https://api-rhpositive.herokuapp.com/bloodbank/add-donor/";
    axios
      .post(url, form_data, {
        headers: {
          "Content-type": "application/json",
          "X-CSRFToken": csrf_token,
        },
      })
      .then((res) => {
        this.setState({ error: false, message: res.data.message });
        console.log(res.data.message);
        console.log(res.data);
      });
  };
  radioChangeHandler1 = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  radioChangeHandler2 = (event) => {
    this.setState({
      marriage_status: event.target.value,
    });
  };
  radioChangeHandler4 = (event) => {
    this.setState({
      veneral_diseases: event.target.value,
    });
  };
  radioChangeHandler3 = (event) => {
    this.setState({
      donated_before: event.target.value,
    });
  };
  checkBoxHandler = (event) => {
    this.setState({
      any_disease: event.target.value,
    });
  };
  onFileChange = (e) => {
    this.setState({
      photo: e.target.files[0],
    });
  };
  render() {
    return (
      <div className="container1">
        <Navbar />
        <div className="registration-container">
          <div className="image-container">
            <img src={Svg7} alt="" />
          </div>
          <div className="details">
            <p className="heading">Registration</p>
            <div className="form">
              <input
                className="input image-input"
                type="file"
                name="photo"
                id="photo"
                accept="image/png,image/jpeg"
                placeholder="upload your photo"
                onChange={this.onFileChange}
              />
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Enter your name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <small>Name should be as per aadhar card</small>
              <input
                className="input"
                type="number"
                name="a_num"
                placeholder="Enter Aadhar number"
                id="a_num"
                value={this.state.a_num}
                onChange={this.handleChange}
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Choose password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <input
                className="input"
                type="date"
                name="dob"
                placeholder="DOB"
                id="dob"
                value={this.state.dob}
                onChange={this.handleChange}
              />
              <div className="radio-buttons radioButtons">
                <RadioButton
                  className="radio-button"
                  changed={this.radioChangeHandler1}
                  id="1"
                  isSelected={this.state.gender === "male"}
                  label="Male"
                  value="male"
                />
                <RadioButton
                  className="radio-button"
                  changed={this.radioChangeHandler1}
                  id="2"
                  isSelected={this.state.gender === "female"}
                  label="Female"
                  value="female"
                />
                <RadioButton
                  className="radio-button"
                  changed={this.radioChangeHandler1}
                  id="3"
                  isSelected={this.state.gender === "transgender"}
                  label="Transgender"
                  value="transgender"
                />
              </div>
              <input
                className="input"
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your mobile number"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <input
                className="input"
                type="text"
                name="bg"
                id="bg"
                placeholder="Blood group"
                value={this.state.bg}
                onChange={this.handleChange}
              />
              <input
                className="input address-input"
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <input
                className="input"
                type="text"
                name="father"
                id="father"
                placeholder="Father name"
                value={this.state.father}
                onChange={this.handleChange}
              />
              <div className="radiobuttons1 radio-buttons ">
                <RadioButton
                  className="radio-button"
                  changed={this.radioChangeHandler2}
                  id="4"
                  isSelected={this.state.marriage_status === "married"}
                  label="Married"
                  value="married"
                />
                <RadioButton
                  className="radio-button"
                  changed={this.radioChangeHandler2}
                  id="5"
                  isSelected={this.state.marriage_status === "unmarried"}
                  label="Unmarried"
                  value="unmarried"
                />
              </div>
              <p className="statement1">Did you donate blood earlier?</p>
              <div className="radiobuttons2 radio-buttons ">
                <RadioButton
                  className="radio-button"
                  changed={this.radioChangeHandler3}
                  id="6"
                  isSelected={this.state.donated_before === "yes"}
                  label="Yes"
                  value="yes"
                />
                <RadioButton
                  className="radio-button"
                  changed={this.radioChangeHandler3}
                  id="7"
                  isSelected={this.state.donated_before === "no"}
                  label="No"
                  value="no"
                />
              </div>
              <p className="statement">Date of Donation:</p>
              <input
                className="input"
                type="date"
                name="last_donated"
                placeholder="Date of donation"
                id="last_donated"
                value={this.state.last_donated}
                onChange={this.handleChange}
              />
              <p>
                Have you any reason to believe that you may be infected by
                either Hepatits, HIV/AIDS, and/or venereal disease?
              </p>
              <div className="radiobuttons3 radio-buttons ">
                <RadioButton
                  className="radio-button"
                  changed={this.radioChangeHandler4}
                  id="8"
                  isSelected={this.state.veneral_diseases === "yes"}
                  label="Yes"
                  value="yes"
                />
                <RadioButton
                  className="radio-button"
                  changed={this.radioChangeHandler4}
                  id="9"
                  isSelected={this.state.veneral_diseases === "no"}
                  label="No"
                  value="no"
                />
              </div>
              <p>
                In the latest 6 months have you had any history of the
                following?
              </p>
              <div className="checkbox-container">
                <div className="checkbox-container1">
                  <CheckBox
                    className="check-box"
                    id="a"
                    name="Unexplained weight loss"
                    value="Unexplained weight loss"
                    changed={this.checkBoxHandler}
                    isSelected={
                      this.state.any_disease === "Unexplained weight loss"
                    }
                  />
                  <CheckBox
                    className="check-box"
                    id="b"
                    name="Swollen glands"
                    value="Swollen glands"
                    changed={this.checkBoxHandler}
                    isSelected={this.state.any_disease === "Swollen glands"}
                  />
                  <CheckBox
                    className="check-box"
                    id="c"
                    name="Acupunture"
                    value="Acupunture"
                  />
                  <CheckBox
                    className="check-box"
                    id="d"
                    name="Tattooing"
                    value="Tattooing"
                  />
                  <CheckBox
                    className="check-box"
                    id="e"
                    name="Minor surgery"
                    value="Minor surgery"
                  />
                </div>
                <div className="checkbox-container2">
                  <CheckBox
                    className="check-box"
                    id="f"
                    name="Repeated Diarrhoea"
                    value="Repeated Diarrhoea"
                  />
                  <CheckBox
                    className="check-box"
                    id="g"
                    name="Ear Piercing"
                    value="Ear Piercing"
                  />
                  <CheckBox
                    className="check-box"
                    id="h"
                    name="Continuous low-grade fever"
                    value="Continuous low-grade fever"
                  />
                  <CheckBox
                    className="check-box"
                    id="i"
                    name="Dental Extraction"
                    value="Dental Extraction"
                  />
                  <CheckBox
                    className="check-box"
                    id="j"
                    name="Blood transfusion"
                    value="Blood transfusion"
                  />
                </div>
              </div>
              <p>Have you suffered any of the following?</p>
              <div className="checkbox-container checkboxContainer">
                <div className="checkbox-container1">
                  <CheckBox
                    className="check-box"
                    id="k"
                    name="Chronic nephritis"
                    value="Chronic nephritis"
                  />
                  <CheckBox
                    className="check-box"
                    id="l"
                    name="Lung disease"
                    value="Lung disease"
                  />
                  <CheckBox
                    className="check-box"
                    id="m"
                    name="Typhoid"
                    value="Typhoid"
                  />
                  <CheckBox
                    className="check-box"
                    id="n"
                    name="Pertussis"
                    value="Pertussis"
                  />
                </div>
                <div className="checkbox-container2">
                  <CheckBox
                    className="check-box"
                    id="o"
                    name="Diabetics"
                    value="Diabetics"
                  />
                  <CheckBox
                    className="check-box"
                    id="p"
                    name="Cholera"
                    value="Cholera"
                  />
                  <CheckBox
                    className="check-box"
                    id="q"
                    name="Diphtheria"
                    value="Diphtheria"
                  />
                  <CheckBox
                    className="check-box"
                    id="r"
                    name="Gamma Globulin"
                    value="Gamma Globulin"
                  />
                </div>
              </div>
              <button className="input" onClick={this.handleSubmit.bind(this)}>
                submit
              </button>
              {this.state.error ? <p>{this.state.message}</p> : null}
            </div>
          </div>
        </div>
        <NavbarForMobile />
      </div>
    );
  }
}

export default Registration;
