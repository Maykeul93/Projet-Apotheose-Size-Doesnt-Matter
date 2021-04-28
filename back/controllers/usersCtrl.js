const bcrypt = require('bcrypt');
const adminDataMapper = require('../dataMapper/adminDataMapper');
const amdinDataMapper = require('../dataMapper/adminDataMapper')
const userDataMapper = require('../dataMapper/userDataMapper');
const jwtUtils = require('../utils/jwt');

module.exports = {
    
  async getUsers(req, res) {
    try {
      const users = await userDataMapper.recupUser();
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  
  async getUserById(req, res) {
      const userId = req.params.id;
    try {
      const user =  await userDataMapper.recupUserById(userId);
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  
  async signup (req, res) {
    const {email, pseudo, password, validPassword} = req.body;
    const role = "user";
    const emailRegExp = new RegExp(/[a-zA-Z0-9\-_]+[a-zA-Z0-9\.\-_]*@[a-z0-9\.\-_]{2,}\.[a-z\.\-_]+[a-z\.\-_]+/);
    const valid = emailRegExp.test(email);// test la regex sur l'email
    
    // verification email 
    if (email == null || pseudo == null || password == null || validPassword == null) {return res.status(400).json({ 'error': 'paramètre manquant' })}; 
    if(!valid){return res.status(400).json({'error':'email non valide'})}
    if (password !== validPassword) {return res.status(400).json({ 'error': 'Les deux MDP ne correspondent pas' });}
    const userFound = await userDataMapper.checkMail(email); 
    //insert user's informations
    try {
      if (userFound.length === 0) {
        const hashedPassword = await bcrypt.hash(password, 10) 
        if (email === 'mika@gmail.com') {
          await userDataMapper.register(email, hashedPassword, pseudo, role);
          const info = await userDataMapper.checkMail(email); 
          console.log(info); 
          await adminDataMapper.changeRole('admin', info[0].id); 
          res.status(201).json({'succes':'Votre compte a bien été créé en admin'});
        }
        await userDataMapper.register(email, hashedPassword, pseudo, role);
        res.status(201).json({'succes':'Votre compte a bien été créé'});
      } else {
       return res.status(400).json({'error': 'Déja inscrit'});
      }
    } catch (error){
      res.status(500).send(error);
      }
  },
  
  async signin (req, res){
    const email = req.body.email;
    const mail = await userDataMapper.checkMail(email); 
    console.log(mail[0]); 
    // email verification
    if (mail.length === 0) {return res.status(400).json({'error': 'Email invalide'});}
      try {
        //password verification
        if (await bcrypt.compare(req.body.password, mail[0].password) ) {
          res.status(201).json({'succes':'Vous êtes connecté', 'id':mail[0].id , 'pseudo':mail[0].pseudo, 'email':mail[0].email, 'role':mail[0].role, 'avatar':mail[0].avatar, 'token':jwtUtils.generateTokenForUser(mail[0])});
        } else {
          return res.status(400).json({'error': 'Mot de passe incorrect '});
        }
        
      } catch (error){
        res.status(500).send(error);
        }
    
  },
  
  async updateUser (req, res){
    const { pseudo, email, password, avatar, newPassword, newPassword2 } = req.body;
    
    const { id } = req.params;
    const user = await userDataMapper.recupUserById(id); 
    const checkMail = await userDataMapper.checkMail(email);
    console.log(user[0].id); 
    console.log(avatar); 
    try {
      if (email){
        if (checkMail.length === 0 ){
          await userDataMapper.updateMail(email, user[0].id);
        } else { 
           return res.status(400).json({'error' : 'Email déjà enregistré'});
        }
      }

      if (pseudo){
        if (user[0].pseudo !== pseudo ) {
          await userDataMapper.updatePseudo(pseudo, id);
        }else {
          return res.status(400).json({"error" : "Ce pseudo est déjà le votre"}); 
        }
      }
      
      if (password){
        const testPassword = await bcrypt.compare(password, user[0].password)
        if (newPassword === newPassword2 && testPassword === true){
          const hashedPassword = await bcrypt.hash(newPassword, 10)
          await userDataMapper.updatePassword(hashedPassword, id);  
      } else {
        return res.status(400).json({'errors':'Soit les nouveaux MDP ne correspondent pas soit ancien MDP est incorrect'});
      }}

      if (avatar) {
        if (avatar !== user[0].avatar) {
          await userDataMapper.updateAvatar(avatar, user[0].id); 
        } else {
          return res.status(400).json({'error': 'Cet avatar est déjà le votre'});
        }
      }
      const infoUser = await userDataMapper.infoUser(id)
      return res.status(201).json({
        'success': 'utilisateur mis à jour', 
        infoUser 
      }); 
    } catch (error) {
       res.status(500).json(error);
    }
  },

  async deleteUser (req, res){
    const id = parseInt(req.params.id);
    try {
      await userDataMapper.deleteUser(id);
      res.status(201).json({'succes':'Votre compte a bien été supprimé'})
    } catch (error) {
      res.status(500).send(error);
      }
  },

  async getHistory (req, res){
    const userId = req.params.id; 
    try {
      const gameNumber = await userDataMapper.gameCount(userId); 
      const lastGame = await userDataMapper.lastGameDate(userId); 
      const first = await userDataMapper.firstPlace(userId); 
      const second = await userDataMapper.secondPlace(userId); 
      const third = await userDataMapper.thirdPlace(userId); 
      const exactAnswer = await userDataMapper.exactAnswerCount(userId); 
      res.status(201).json({'numberOfGame': gameNumber, 
      'lastGamePlayed': lastGame.toLocaleDateString(), 
      'firstPlace': first, 
      'secondPlace': second, 
      'thirdPlace': third,
      'exactAnswer': exactAnswer}); 
    } catch (error){
      res.status(500).send(error);
    }
  }
}
