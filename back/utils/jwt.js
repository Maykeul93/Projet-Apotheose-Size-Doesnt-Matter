// Imports
var jwt = require('jsonwebtoken');
require('dotenv').config(); 
// const JWT_SIGN_SECRET = 'ijuhgiuhiuhgqrzqrg54gd141b1r1zh1rzh1dq81h8b458948h484h8h4zh4eh8e4hes88zh4ehdx84e8zq';

// Exported functions
module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign({
      userId: userData.id,
      isAdmin: userData.isAdmin
    },
    process.env.JWT_SIGN_SECRET,// Sur heroku a mettre dans les variables d'environnement (ne pas supprimer le com)
    {
      expiresIn: '48h'
    })
  },
  
}