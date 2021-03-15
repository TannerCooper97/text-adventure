import React, {Component} from 'react';
import axios from 'axios';
import CharacterCreation from './Components/CharacterCreation'
import Footer from './Components/Footer'
import './App.css';

class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="App">
      
        <CharacterCreation />
        <Footer />
      </div>
    )
  }
}

export default App