import React from 'react';
import './App.css';
import Works from './Works';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Route, useLocation } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import Resume from './Resume';
import Home from './Home'

const App = () => {

  const location = useLocation();
  return (
    <div className="App">
      <BrowserRouter location={ location }>
        <Route path="/" exact component={ Home } />
      </BrowserRouter>
    </div >
  )
}

// function Home() {
//   const listOfString = [" Developer ", " Freelancer ", " Designer "];
//   return (
//     <div className="page">
//       <div className="main">
//         <p className="name">Bhavna Tahelyani</p>
//         <h1 className="changeTxt">I'm a
//           <ReactJsTyping StringList={ listOfString } speed={ 20 } />
//         </h1>
//       </div>
//     </div>
//   );
// }

export default App;
