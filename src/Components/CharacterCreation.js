import axios from 'axios';
import React, {Component} from 'react';
import './CharacterCreation.css';

class CharacterCreation extends Component {
    constructor(props){
        super(props);
        this.state = {
           CharacterName: '',
           NewCharacterClass: {},
           DisplayedClasses: null
        }
    }


    componentDidMount = () => {
        axios.get('/api/classSelect').then(res => {
            this.setState({DisplayedClasses: res.data})
        })
    }


  render(){

      if(!this.state.DisplayedClasses ){
        return null;
    }
      return (
          <div>
              <h2 id = 'ClassHeader'>Choose your Class</h2>

              <div id = 'Classes'>
              <div className ='ClassOptions' id = 'Mage'>
              <h2>{this.state.DisplayedClasses.mage.className}</h2>
              <p>Health: {this.state.DisplayedClasses.mage.health}</p>

              {this.state.DisplayedClasses.mage.attacks.map((attack, i) => { return (<p key={i}> {attack.name}: {attack.dmg} damage</p>)})}

              <button onClick={ () => this.props.setNewCharacterData(this.state.DisplayedClasses.mage)}>Select Mage</button>
              </div>

              <div className ='ClassOptions' id='Pally'>
              <h2>{this.state.DisplayedClasses.pally.className}</h2>
              <p>Health: {this.state.DisplayedClasses.pally.health}</p>
              
                {/* { Finds each index and maps over the attacks of mage/pally/rogue. (key={i} is how react finds the specific index of each mapped attack)} */}
                {this.state.DisplayedClasses.pally.attacks.map((attack, i) => { return (<p key={i}> {attack.name}: {attack.dmg} damage</p>)})}

              <button onClick={ () => this.props.setNewCharacterData(this.state.DisplayedClasses.pally)}>Select Pally</button>
              </div>

              <div className ='ClassOptions' id='Rogue'>
              <h2>{this.state.DisplayedClasses.rogue.className}</h2>
              <p>Health: {this.state.DisplayedClasses.rogue.health}</p>
                {this.state.DisplayedClasses.rogue.attacks.map((attack, i) => { return (<p key={i}> {attack.name}: {attack.dmg} damage</p>)})}
              <button onClick={ () => this.props.setNewCharacterData(this.state.DisplayedClasses.rogue)}>Select Rogue</button>
              </div>

              </div>
          </div>
      )
  }

}

export default CharacterCreation;
