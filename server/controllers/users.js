let usernames = []

  const getUser = (req, res) => {
    res.status(200).send(user)
  }
  
  const postUser = (req, res) => {
    usernames.push(req.body.username)
    res.status(200).send(usernames)
  
  }

  const deleteUser = (req, res) => {
    usernames.splice(usernames.length - 1,1)
    res.status(200).send(usernames)
  }
  

 
  module.exports = {
    getUser,
    postUser,
    deleteUser
  }