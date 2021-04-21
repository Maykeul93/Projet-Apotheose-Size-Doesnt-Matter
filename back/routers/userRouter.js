const express = require('express');
const auth = require('../auth');
const router = express.Router();
const usersCtrl = require('../controllers/usersCtrl');
const jwt = require('../utils/jwt');

// road for getting all users
router.get('/users', usersCtrl.getUsers);
// road for getting user by an id
router.get('/users/:id',auth.authUser, jwt.authentificationToken, usersCtrl.getUserById);
// road for update User
router.put('/users/:id', auth.authUser, jwt.authentificationToken, usersCtrl.updateUser);
// road for delete a user
router.delete('/users/:id', auth.authUser, jwt.authentificationToken , usersCtrl.deleteUser);
// road for sign up (s'inscrire)
router.post('/signup', usersCtrl.signup);
// road for sign in (se connecter)
router.post('/signin',usersCtrl.signin);
// road to display the history of a player
router.get('/history/:id', usersCtrl.getHistory);



module.exports = router;