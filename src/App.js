import React from 'react';
import './App.css';
import "./pageTransitions/slideTransition.scss";
import Nav from './Nav';
import Works from './Works';
import Certificate from './Certificate';
import { Switch, Route, useLocation } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';

function App() {

  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <Switch>
        <SlideRoutes location={ location }>
          <Route path="/" exact component={ Home } />
          <Route path="/works" component={ Works } />
          <Route path="/certificates" component={ Certificate } />
        </SlideRoutes>
      </Switch>
    </div >
  )
}

const Home = () => (
  <div className="page">
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
