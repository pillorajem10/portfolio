import React from 'react';

//navigation
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//css
import './App.css';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Default from './pages/Default';

//components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NavbarLowReso from './components/NavbarLowReso';
import ScrollToTop from './components/ScrollToTop';

//images
import bg from './images/bg.jpg';
import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.jpg';
import bg3 from './images/bg3.jpg';
import bg4 from './images/bg4.jpg';

//material-ui
import { useMediaQuery } from '@material-ui/core';

const App = () => {

  const showNavbarLow = useMediaQuery("(max-width: 635px)");

  //function for background-img shuffle
  const shuffle = (arr) => {
    let currentIndex = arr.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  };

  //backgroundImg
  const backgroundImg = shuffle([
    bg, bg1, bg2, bg3, bg4
  ])[0];

  return (
    <div className="main-body" style={{backgroundImage: `url(${backgroundImg})`}}>
      <BrowserRouter>
        <ScrollToTop/>
        { showNavbarLow ? <NavbarLowReso/> : <Navbar/> }
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Projects}/>
          <Route component={Default}/>
        </Switch>
        <p>.</p>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
