
const express = require('express')

const monsterCtrl = require('./controllers/monster-finder')
    
const port = 3001
const app = express();
app.use(express.json());

//User Gets/Posts/Deletes
const {getUser, postUser, deleteUser} = require('./controllers/users')
app.get('/api/user', getUser)
app.post('/api/user', postUser)
app.delete('/api/user', deleteUser)


//Monster Gets
app.get('/api/monster-finder', monsterCtrl.getMonster);


//classSelect Gets
const {getClasses} = require('./controllers/classSelect')
app.get('/api/classSelect', getClasses)

//HighScore Get/Put
const { UpdateHighScore, getHighScore } = require('./controllers/highScores')
app.put('/api/highScores', UpdateHighScore)
app.get('/api/highScores', getHighScore)




app.listen(port, () => console.log(`Server is running on ${port}` ));