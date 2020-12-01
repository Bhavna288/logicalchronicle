import { React, Component } from 'react';
import './App.css';
import "./pageTransitions/slideTransition.scss";
import Nav from './Nav';
import Works from './Works';
import Certificate from './Certificate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevKey: this.getKey(this.props.location)
    };
  }

  componentWillReceiveProps() {
    this.setState({ prevKey: this.getKey(this.props.location) });
  }

  getKey(location) {
    return this.props.navigation.state.key;
  }

  render() {
    const { location } = this.props;
    const currentPath = location.pathname.split("/")[1] || "/";

    const timeout = { enter: 800, exit: 400 };

    return (
      <Router>
        <div className="App">
          <Nav />
          <TransitionGroup component="div" className="transitionApp">
            <CSSTransition key={ currentPath } timeout={ timeout } classNames="pageSlider" mountOnEnter={ false } unmountOnExit={ true }>
              <div className={ this.getKey(location) - this.state.prevKey >= 0 ? "left" : "right" }>
                <Switch location={ location }>
                  <Route path="/" exact component={ Home } key="1" />
                  <Route path="/works" component={ Works } key="2" />
                  <Route path="/certificates" component={ Certificate } key="3" />
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </Router >
    )
  }
}

const Home = () => (
  <div className="homePage">
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
