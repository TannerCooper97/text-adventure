


const axios = require('axios');


    // Monsters

    module.exports = {



    getListOfMonsters: (req, res) => {

    
    axios.get('https://www.dnd5eapi.co/api/monsters').then(results => {
        
        
        const diceRoll = Math.ceil(Math.random() * results.data.count);
        
        let monsterMash = results.data.results[diceRoll]

        axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterMash.index}`).then(results => {  
            res.status(200).send(results.data)
        })
        

    })
    .catch(err => console.log(err))

      
  }


}


    //   Monster Hp List

    


