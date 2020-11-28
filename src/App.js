import React from 'react';
import './App.css';
import Nav from './Nav';
import Project from './Projects';
import Certificate from './Certificate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/projects" component={ Project } />
          <Route path="/certificates" component={ Certificate } />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    Home Page
  </div>
);

export default App;
