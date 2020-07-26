import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/NavbarComponent'
import CarouselComponent from './components/LandingPage/Carousel/CarouselComponent'
import WhatwedoComponent from './components/LandingPage/Whatwedo/whatwedo.component'
import MensApparel from './components/Clothes/MensApparel/MensApparel';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenApparel: true
    }
    this.updateState = this.updateState.bind(this);
  }
  updateState(value) {
    if (value === true) {
      this.setState({
        showMenApparel: false
      })
    }
    else {
      this.setState({
        showMenApparel: true
      })
    }
  }
  render() {

    return (
      <div>

        {this.state.showMenApparel && <NavbarComponent id="second" update={this.updateState} />}
        {!this.state.showMenApparel && <NavbarComponent id="second" update={this.updateState} />}
        {this.state.showMenApparel && <CarouselComponent />}
        {this.state.showMenApparel && <WhatwedoComponent />}
        {!this.state.showMenApparel && <MensApparel />}
      </div>
    );
  }
}

export default App;
