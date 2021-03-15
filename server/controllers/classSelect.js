let Class = {

    Mage: {

    className: 'Mage',

    Health: 10,

    Gold: 3,

    attacks:{

        
        Fireball: ['FireBall:', 30],
        ArcaneBlast: ['ArcaneBlast:',15]

    }
},

    Pally: {

        ClassName: 'Paladin',

        Health: 20,

        Gold: 5,

        attacks: {

            HolyStrike: 20,
            LightHeal: 10
            
   }
},

    Rogue: {

        ClassName: 'Rogue',

        Health: 15,

        Gold: 15,

        attacks:{

            Ambush: 50,
            Poison: 5
    }
}
}

const getClasses = (req, res) => {
    res.status(200).send(Class)
  }


  module.exports = {
    getClasses
  }