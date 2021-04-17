const express = require('express');

const router = express.Router();
const usersCtrl = require('../controllers/usersCtrl');


// road for getting all users
router.get('/users', usersCtrl.getUsers);
// road for getting user by an id
router.get('/users/:id', usersCtrl.getUserById);
// road for update User
router.put('/users/:id',usersCtrl.updateUser);
// road for delete a user
router.delete('/users/:id',usersCtrl.deleteUser);
// road for sign up (s'inscrire)
router.post('/signup', usersCtrl.signup);
// road for sign in (se connecter)
router.post('/signin',usersCtrl.signin);

module.exports = router;