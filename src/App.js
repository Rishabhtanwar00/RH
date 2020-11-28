import React from 'react';
import './App.css';
import Homepage from './pages/homepage/hompage.component';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
  return (
     <div>
       <BrowserRouter>
       <Switch>
         <Route exact path='/' component={ Homepage} />
       </Switch>
       </BrowserRouter>
     </div>
    );
  }
}

export default App;
