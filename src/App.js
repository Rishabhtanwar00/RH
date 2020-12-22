import React from "react";

import "./App.css";

import Homepage from "./pages/homepage/hompage.component";

import Registration from "./pages/registration/registration.page";

import Login from "./pages/login/login.page";

import AboutPage from "./pages/about/about.page";

import ContactPage from "./pages/contact/contact.page";

import DashBoard from "./pages/dashboard/dashboard.page";

import Hospital from "./pages/hospital/hospital.page";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact-us" component={ContactPage} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/hospital" component={Hospital} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
