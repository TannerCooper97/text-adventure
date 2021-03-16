let Class = {

    mage: {

    className: 'Mage',

    health: 10,

    gold:  3,

    attacks:[
        {
            name: 'Fireball',
            dmg: 30,
        },
        {
            name: 'ArcaneBlast',
            dmg: 15,
        }
    ]
},

    pally: {

        className: 'Paladin',

        health:  20,

        gold:  0,

        attacks:[
            {
                name: 'Holy Fire',
                dmg: 25,
            },
            {
                name: 'Light Heal',
                dmg: 10,
            }
        ]
},

    rogue: {

        className: 'Rogue',

        health:  15,

        gold:  10,

        attacks:[
            {
                name: 'Ambush',
                dmg: 40,
            },
            {
                name: 'Poison',
                dmg: 5,
            }
        ]
}
}

const getClasses = (req, res) => {
    res.status(200).send(Class)
  }


  module.exports = {
    getClasses
  }