import React from 'react';
import './App.css';
import Nav from './Nav';
import Works from './Works';
import Certificate from './Certificate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/works" component={ Works } />
          <Route path="/certificates" component={ Certificate } />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <div className="main">
      <p className="name">Bhavna Tahelyani</p>
      <h1 className="changeTxt">I'm a <span
        className="txt-rotate"
        data-period="1000"
        data-rotate='["Developer ", "Freelancer ", "Designer "]'></span>
      </h1>
    </div>
  </div>
);

export default App;
