let highScore = 0;

const getHighScore = (req, res) => {
    res.status(200).send({highScore}) 
    
}

const UpdateHighScore = (req, res) => {
    if(req.body.newHighScore > highScore){
    highScore = req.body.newHighScore
    }
    res.status(200).send({highScore})
    //This is the same as {highScore: higscore} just Short hand
    }

  //Export the Functions
  module.exports = {
    UpdateHighScore,
    getHighScore
  }