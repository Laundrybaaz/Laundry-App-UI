import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/LandingPage/navbar/NavbarComponent'
import CarouselComponent from './components/LandingPage/Carousel/CarouselComponent'
import WhatwedoComponent from './components/LandingPage/Whatwedo/whatwedo.component'
class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent id="second" />
        <CarouselComponent />
        <WhatwedoComponent />
      </div>
    );
  }
}

export default App;
