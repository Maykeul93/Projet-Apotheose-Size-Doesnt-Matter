const bcrypt = require('bcrypt')
const userDataMapper = require('../dataMapper/userDataMapper');
const jwtUtils = require('../routers/utils/jwt');

module.exports = {
    //get all users
  async recupUser(req, res) {
      const users = await userDataMapper.recupUser();
      res.send({users});
  },
  //get user by specific id
  async recupUserById(req, res) {
      const userId = req.params.id;
      const user =  await userDataMapper.recupUserById(userId);
      res.send({user});
  },
  //post signup
  async signup (req, res) {
    const email = req.body.email;
    const pseudo = req.body.pseudo;
    const password = req.body.password;
    const role = "user";
    // verification email 
    if (email == null || pseudo == null || password == null) {
        return res.status(400).json({ 'error': 'paramètre manquant' });
    }; 
    const userFound = await userDataMapper.checkMail(email); 
    //insert user's informations
    try {
      if (userFound.length === 0) {
        const hashedPassword = await bcrypt.hash(password, 10) 

        await userDataMapper.register(email, hashedPassword, pseudo, role);
        res.status(201).json({'succes':'true'});
      } else {
       return res.status(400).json({'error': 'Déja inscrit'});
      }
    } catch {
      res.status(500).send();
    }
  },
  
  //post signin
  async signin (req, res){
    const email = req.body.email;
    const mail = await userDataMapper.checkMail(email); 
    // email verification
    if (mail.length === 0) {return res.status(400).json({'error': 'Email invalide'});}
    for (const i of mail){
      const password = i.password;
      const id = i.id; 
      const pseudo = i.pseudo; 
      try {
        //password verification
        if (await bcrypt.compare(req.body.password, password) ) {
          res.status(201).json({'succes':'true', 'id':id, 'pseudo':pseudo, 'token':jwtUtils.generateTokenForUser(mail)});
        } else {
          return res.status(400).json({'error': 'Mot de passe incorrect '});
        }
      } catch {
        res.status(500).send();
      }
    }
  },

}
