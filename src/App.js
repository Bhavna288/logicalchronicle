import React from 'react';
import './App.css';
import "./pageTransitions/slideTransition.scss";
import Nav from './Nav';
import Works from './Works';
import About from './About';
import Certificate from './Certificate';
import { Switch, Route, useLocation } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import ReactJsTyping from 'reactjs-typing-effect';
import Resume from './Resume';

function App() {

  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <Switch>
        <SlideRoutes location={ location }>
          <Route path="/" exact component={ Home } />
          <Route path="/about" exact component={ About } />
          <Route path="/resume" exact component={ Resume } />
          <Route path="/works" component={ Works } />
          <Route path="/certificates" component={ Certificate } />
        </SlideRoutes>
      </Switch>
    </div >
  )
}

function Home() {
  const listOfString = [" Developer ", " Freelancer ", " Designer "];
  return (
    <div className="page">
      <div className="main">
        <p className="name">Bhavna Tahelyani</p>
        <h1 className="changeTxt">I'm a
          <ReactJsTyping StringList={ listOfString } speed={ 20 } />
        </h1>
      </div>
    </div>
  );
}

export default App;
