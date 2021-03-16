import React, {Component} from 'react';
import axios from 'axios';
import Encounter from './Components/Encounter'
import CharacterCreation from './Components/CharacterCreation'
import Footer from './Components/Footer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      NewPlayer: null,
      highScore: 0
    }

    this.setNewCharacterData = this.setNewCharacterData.bind(this);
    this.setPlayerHealth = this.setPlayerHealth.bind(this);
    this.setPlayerGold = this.setPlayerGold.bind(this);
    this.setNewHighScore  = this.setNewHighScore.bind(this);
  }


  setNewCharacterData = (player) => {
    this.setState({ NewPlayer: player})
  }

  //Set Player Health with Object assing (So we dont paste over New Player)
  setPlayerHealth = (value) => {
    const newPlayerHealth = Object.assign({}, this.state.NewPlayer, { health: this.state.NewPlayer.health + value})
    this.setState({ NewPlayer: newPlayerHealth})
  } 

  //Set Player Gold with Object assign (So we dont paste over New Player)
  setPlayerGold = (value) => {
    const newPlayerGold = Object.assign({}, this.state.NewPlayer, { gold: this.state.NewPlayer.gold + value})
    this.setState({ NewPlayer: newPlayerGold})
  } 

  componentDidMount(){
    this.getHighScore();
  }
  getHighScore = () => {
    axios.get('/api/highScores').then(res => {
      this.setState({ highScore: res.data.highScore})
    })
  }
  //Put the newHighScore to the players gold count
  setNewHighScore = () => {
    axios.put('/api/highScores', {newHighScore: this.state.NewPlayer.gold}).then(res => this.setState({ highScore: res.data.highScore}))
  }  

  render() {
    console.log(this.state.highScore)
    return (
      <div className="App">
      
          {/* ternary statement, "Short If Statment"*/ 
          !this.state.NewPlayer ? <CharacterCreation setNewCharacterData={this.setNewCharacterData} /> : null}

          <h1 id = 'HighScore'>HighScore: {this.state.highScore}</h1>

          <Encounter characterClass={this.state.NewPlayer} 
          setNewPlayerHealth={this.setPlayerHealth} 
          setNewPlayerGold={this.setPlayerGold}/>

          <div id = 'EndButtonBox'>
          <button id = 'EndButton' onClick={this.setNewHighScore}><h3>End your Adventure?</h3></button>
          </div>

          <Footer />

          

      </div>
    )
  }
}

export default App