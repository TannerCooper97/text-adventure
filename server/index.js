
const express = require('express')

const monsterCtrl = require('./controllers/monster-finder')
    
const port = 3001
const app = express();
app.use(express.json());

//User Gets/Puts
const {getUser, updateUser, deleteUser} = require('./controllers/users')
app.get('/api/user', getUser)
app.post('/api/user', updateUser)
app.delete('/api/user', deleteUser)


//Monster Gets
app.get('/api/monster-finder', monsterCtrl.getListOfMonsters);

//classSelect Gets

const {getClasses} = require('./controllers/classSelect')
app.get('/api/classSelect', getClasses)




app.listen(port, () => console.log(`Server is running on ${port}` ));