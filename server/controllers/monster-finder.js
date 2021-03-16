


const axios = require('axios');


    // Monsters

    module.exports = {

    getMonster: (req, res) => {

    //Get all monsters and put them into an array
    axios.get('https://www.dnd5eapi.co/api/monsters').then(results => {
         //Take the array of Monsters Grab one Random Monster in diceRoll
        const diceRoll = Math.ceil(Math.random() * results.data.count);
        
        //Set that sigle index of diceRoll to monsterMash
        let monsterMash = results.data.results[diceRoll]
        
        axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterMash.index}`).then(results => {  
            res.status(200).send(results.data)
        })
        

    })
    .catch(err => console.log(err))

      
  }


}


    //   Monster Hp List

    


