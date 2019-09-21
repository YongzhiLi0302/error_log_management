import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar';
import Header from './components/Header';
import Dashboard from './Dashboard';
import Log from './Log';
import EBSManagement from './EBSManagement';


class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Navibar/>
        <React.Fragment>
          <Route path = '/' exact component = {Dashboard}/>
          <Route path="/dashboard" component = {Dashboard} />
          <Route path='/log' component = {Log}/> 
          <Route path='/EBS_Management' component = {EBSManagement}/>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
