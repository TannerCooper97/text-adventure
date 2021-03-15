import axios from 'axios';
import React, {Component} from 'react';

class CharacterCreation extends Component {
    constructor(props){
        super(props);
        this.state = {
           CharacterName: '',
           NewCharacterClass: {},
           DisplayedClasses: {}
        }
    }


    componentDidMount = () => {
        axios.get('/api/classSelect').then(res => {
            this.setState({DisplayedClasses: res.data.Class})
        })
    }

    //Put into CharacterCreation?
    getClass = (characterChoice) => {
        this.setState({NewCharacterClass: characterChoice})
    }



  render(){
      console.log(this.state.DisplayedClasses);

      if(!this.state.DisplayedClasses || !this.state.DisplayedClasses.Mage){
        return 'Sadness and Depression';
    }
      return (
          <div>
              <h2>Now Choose your class!</h2>
              <div id='Mage'>
              <h2>{this.state.DisplayedClasses.Mage.ClassName}</h2>
              <p>{this.state.DisplayedClasses.Mage.Health}</p>
              <p>{this.state.DisplayedClasses.Mage.attacks.FireBall}</p>
              <p>{this.state.DisplayedClasses.Mage.attacks.ArcaneBlast}</p>
              <button onClick={ () => this.getClass(this.state.DisplayedClasses.Mage)}>Select Mage</button>
              </div>

              <div id='Pally'>
              <h2>{this.state.DisplayedClasses.Pally.ClasName}</h2>
              <p>{this.state.DisplayedClasses.Pally.Health}</p>
              <p>{this.state.DisplayedClasses.Pally.attacks.FireBall}</p>
              <p>{this.state.DisplayedClasses.Pally.attacks.ArcaneBlast}</p>
              <button onClick={ () => this.getClass(this.state.DisplayedClasses.Pally)}>Select Pally</button>
              </div>

              <div id='Rogue'>
              <h2>{this.state.DisplayedClasses.Rogue.ClasName}</h2>
              <p>{this.state.DisplayedClasses.Rogue.Health}</p>
              <p>{this.state.DisplayedClasses.Rogue.attacks.FireBall}</p>
              <p>{this.state.DisplayedClasses.Rogue.attacks.ArcaneBlast}</p>
              <button onClick={ () => this.getClass(this.state.DisplayedClasses.Rogue)}>Select Rogue</button>
              </div>
          </div>
      )
  }

}

export default CharacterCreation;
