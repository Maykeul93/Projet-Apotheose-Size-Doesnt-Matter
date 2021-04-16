const bcrypt = require('bcrypt');
const { checkPassword } = require('../dataMapper/userDataMapper');
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
      const email = i.email 
      try {
        //password verification
        if (await bcrypt.compare(req.body.password, password) ) {
          res.status(201).json({'succes':'true', 'id':id, 'pseudo':pseudo, 'email':email,'token':jwtUtils.generateTokenForUser(mail)});
        } else {
          return res.status(400).json({'error': 'Mot de passe incorrect '});
        }
      } catch {
        res.status(500).send();
      }
    }
  },
  async updateUser (req, res){
    const id = parseInt(req.params.id);
    const pseudo = req.body.pseudo;
    const email = req.body.email;
   // const password = req.body.password;
    const newPassword = req.body.newPassword;
    const newPassword2 = req.body.newPassword2;
    const user = await userDataMapper.recupUserById(id); 
    const checkMail = await userDataMapper.checkMail(email);
    //const testPassword = await bcrypt.compare(password, checkMail[0].password)
    
    const tab = []

    
    if (email){
      if (checkMail.length === 0){
        await userDataMapper.updateMail(email, user[0].id);
        let result = {'succes':'Email changé'}
        tab.push(result)
      }
    }

    if (pseudo){
      await userDataMapper.updatePseudo(pseudo, id);
      //res.status(201).json({'succes':'true'});
      let result = {'succes':'pseudo changé'}
        tab.push(result)
    }

   // if (password){
      //if (newPassword === newPassword2 && testPassword === true){
      // console.log("je rentre dans ma condition");
       // console.log(newPassword);
        // je hache le nouveaux password
       // const hashedPassword = await bcrypt.hash(newPassword, 10)
       // console.log(hashedPassword);
        // je mets a jour mon MDP en BDD
       // await userDataMapper.updatePassword(hashedPassword, id);
       // let result = {'succes':'Mot de passe changé'}
       // tab.push(result)
      //} else {
       //  res.status(400).json({'errors':'Soit les nouveaux MDP ne correspondent pas soit ancien MDP est incorrect'});
      // }}
   // res.json(tab)
     
    //if (password){
      //if ( newPassword === newPassword2 && await bcrypt.compare(req.body.password, checkMail[0].password)){
        
        
       // const hashedPassword = await bcrypt.hash(newPassword, 10)
        
        //await userDataMapper.updatePassword(hashedPassword, id);
        //res.status(201).json({'succes':'true'});
      //} else {
       // res.status(400).json({'errors':'Soit les nouveaux MDP ne correspondent pas soit ancien MDP est incorrect'});
      //}
      
    //} 

    //if (user[0].email === email ){ 
     // res.status(400).json({'errors':'Email actuel, veuillez changer'}); 
   // }
    //if (checkMail.length === 0) {
     // console.log('toto');
     // await userDataMapper.updateMail(email, user[0].id)
     // res.status(201).json({'succes':'true'})
   // } else {
      //res.status(400).json({'errors':'Déjà inscrit'});
     
    //}
    //if (user[0].password){
     // user.password = password
   // } else {
      // je change le password en BDD
     // await userDataMapper
     /// res.status(201).json({'succes':'true'})
   // }
    //if (user[0].pseudo){
    //  user.pseudo = pseudo
    //} else {
      // je change le pseudo en BDD
      //await userDataMapper
      //res.status(201).json({'succes':'true'})
    //}





    //if (mail.length === 1 || newPassword !== newPassword2) {return res.status(400).json({'error': 'Email Déjà enregistré ou les deux MDP ne correspondent pas'});}
    
    //try {
    // if(await userDataMapper.updateUser(email, password, pseudo, id)){ ;
     // res.status(201).json({'succes':'true'})}
    // else {
      //return res.status(400).json({'error': 'Erreur '});
   // }

   // } catch (errors) {
    //  res.status(500).send(errors);
    //}
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
