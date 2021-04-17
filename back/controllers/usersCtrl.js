const bcrypt = require('bcrypt');
const userDataMapper = require('../dataMapper/userDataMapper');
const jwtUtils = require('../utils/jwt');

module.exports = {
    
  async getUsers(req, res) {
    try {
      const users = await userDataMapper.recupUser();
      res.send({users});
    } catch {
      res.status(500).send(errors);
    }
  },
  
  async getUserById(req, res) {
      const userId = req.params.id;
    try {
      const user =  await userDataMapper.recupUserById(userId);
      res.send({user});
    } catch {
      res.status(500).send(errors);
    }
  },
  
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
  
  
  async signin (req, res){
    const email = req.body.email;
    const mail = await userDataMapper.checkMail(email); 
    // email verification
    if (mail.length === 0) {return res.status(400).json({'error': 'Email invalide'});}
      try {
        //password verification
        if (await bcrypt.compare(req.body.password, mail[0].password) ) {
          res.status(201).json({'succes':'true', 'id':mail[0].id , 'pseudo':mail[0].pseudo, 'email':mail[0].email,'token':jwtUtils.generateTokenForUser(mail)});
        } else {
          return res.status(400).json({'error': 'Mot de passe incorrect '});
        }
      } catch {
        res.status(500).send();
        }
    
  },

  async updateUser (req, res){
    //const {id: id, pseudo: pseudo, email: email, password: password, newPassword: newPassword, newPassword2: newPassword2} = req.body;
    const id = parseInt(req.params.id);
    const pseudo = req.body.pseudo;
    const email = req.body.email;
    const password = req.body.password;
    const newPassword = req.body.newPassword;
    const newPassword2 = req.body.newPassword2;
    const user = await userDataMapper.recupUserById(id); 
    const checkMail = await userDataMapper.checkMail(email);
    
    
    
    
    try{
      const tab = []
      if (email){
        if (checkMail.length === 0){
          await userDataMapper.updateMail(email, user[0].id);
          const result = {'succes':'Nouveau email enregistré'}
          tab.push(result)
        } else {
          const result = {'error':'Email déjà enregistré'}
          tab.push(result)
        }
      }

      if (pseudo){
        await userDataMapper.updatePseudo(pseudo, id);
        const result = {'succes':'Nouveau pseudo enregistré'}
        tab.push(result)
      }

      if (password){
        const testPassword = await bcrypt.compare(req.body.password, user[0].password)
        if (newPassword === newPassword2 && testPassword === true){
          const hashedPassword = await bcrypt.hash(newPassword, 10)
          await userDataMapper.updatePassword(hashedPassword, id);
          const result = {'succes':'Nouveau MDP enregistré'}
          tab.push(result)
      } else {
          res.status(400).json({'errors':'Soit les nouveaux MDP ne correspondent pas soit ancien MDP est incorrect'});
        }}
        res.json(tab)
      } catch (error){
        res.status(500).send(errors);
      }
  },

  async deleteUser (req, res){
    const id = parseInt(req.params.id);
    try {
      await userDataMapper.deleteUser(id);
      res.status(201).json({'succes':'true'})
    } catch (error) {
      res.status(500).send(errors);
      }
  },
}
