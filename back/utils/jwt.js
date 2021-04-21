// Imports
var jwt = require('jsonwebtoken');
require('dotenv').config(); 

// Exported functions
module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign({
      userId: userData.id,
      isAdmin: userData.isAdmin
    },
    process.env.JWT_SIGN_SECRET,// Sur heroku a mettre dans les variables d'environnement (ne pas supprimer le com)
    {
      expiresIn: '24h'
    })
  },
  //Check to make sure header is not undefined, if so, return Forbidden (403)
  checkToken (req, res, next) {
    const header = req.headers['authorization']; 
    console.log(header); 
    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        //il faudra peut être envoyer le req.body.token pour être ok si error
        console.log(token); 
        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403);
    }
  },
  authentificationToken (req, res, next) {
    const header = req.headers['authorization'];
    console.log(header); 
    const token = header && header.split(' ')[1];
    req.token = token;  
    if (token == null) {
      return res.status(403); 
    }
    jwt.verify(req.token, process.env.JWT_SIGN_SECRET, (error) => {
      if (error) {
        throw error; 
      }
      next(); 
    })
  }
}