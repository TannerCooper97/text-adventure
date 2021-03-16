import axios from 'axios'
import React, {Component} from 'react';
import './Encounter.css';


class Encounter extends Component {
    constructor(props){
        super(props)
         
        this.state = {
        
            message: '',
            enemy: null 
        
        }
            this.DoorRoll = this.DoorRoll.bind(this);
        }

     //Door Roll Takes a number 1-30 and Sets each set of numbers to an Encounter.   
    DoorRoll = () => {
    const EncounterRoll = Math.ceil(Math.random() * 30);

    //If 0-9, get monster, set state of enemy, message, and - 5 to Players Health.
    if(EncounterRoll >= 0 && EncounterRoll <= 12){
        axios.get('/api/monster-finder').then( res => {
        this.setState({enemy: res.data, message: `A ${res.data.name} attacks!`})})
        this.props.setNewPlayerHealth(-5)
            
      
    } else if (EncounterRoll >= 13 && EncounterRoll <= 23 ){

      this.props.setNewPlayerHealth(5)
      this.setState({message: 'You found a Health Potion!', enemy: null})

    } else {
       
        this.props.setNewPlayerGold(10)
        this.setState({message: 'You found a Treasure Chest!', enemy: null}) 

    }
    
}

characterAttack = (attackIndex) => {
    if(attackIndex === 0){
        //Do {attackTwo} damage to {monster}
        const newEnemyHealth = Object.assign({}, this.state.enemy, { hit_points: this.state.enemy.hit_points - this.props.characterClass.attacks[0].dmg})
        this.setState({ enemy: newEnemyHealth})
      
          
    } else if (attackIndex === 1){
        //Check to see if character picked palladin
        if(this.props.characterClass.className !== 'Paladin'){
            //Do {attackTwo} damage to {monster}
            const newEnemyHealth = Object.assign({}, this.state.enemy, { hit_points: this.state.enemy.hit_points - this.props.characterClass.attacks[1].dmg})
            this.setState({ enemy: newEnemyHealth})
        } else {
            //Increase Character Health
            this.props.setNewPlayerHealth(10)
        }  
    } 
}

    render(){

        if(!this.props.characterClass){
            return null;
        }

        const attackOne = this.props.characterClass.attacks[0]
        const attackTwo = this.props.characterClass.attacks[1]

        return(


              <div className ='EncounterStyles'>

                <div id = 'DoorShadow'>
                   <button className = 'Doors' onClick={this.DoorRoll}><h3>Door 1</h3></button>
                   <button className = 'Doors' onClick={this.DoorRoll}><h3>Door 2</h3></button>
                   <button className = 'Doors' onClick={this.DoorRoll}><h3>Door 3</h3></button>
                </div>

                <div id = 'EncounterMessage'>
                    {this.state.message}
                    {/* ternary statement, "Short If Statment", Enemy showing? no? Set nothing. Yes? Set enemy.*/ 
                    this.state.enemy ? <h2>{this.state.enemy.name}
                    </h2> : null}
                    {/* ternary statement */ 
                    this.state.enemy ? <p>Hit Points: {this.state.enemy.hit_points}
                    </p> : null}
                </div>

                <div id = 'newCharacter'>
                <h2>{this.props.characterClass.className}</h2>
                <p>Health: {this.props.characterClass.health}</p>
                <button className = 'attackButtons'onClick={ () => this.characterAttack(0)}>
                    {attackOne.name}: {attackOne.dmg} dmg</button>
                <button className = 'attackButtons' onClick={ () => this.characterAttack(1)}>
                    {attackTwo.name}: {attackTwo.dmg} dmg</button>
                <p>Gold: {this.props.characterClass.gold}</p>
                </div>
                
            

              </div>
        )
    }
}

export default Encounter;