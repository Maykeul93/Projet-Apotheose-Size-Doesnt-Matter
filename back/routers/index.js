const express = require('express');

const router = express.Router();
const usersCtrl = require('../controllers/usersCtrl');

router.get('/', function (req, res) {
    res.send('hello')
});

// road for getting all users
router.get('/users', usersCtrl.recupUser);
// road for getting user by an id
router.get('/users/:id', usersCtrl.recupUserById);
// road for sign up (s'inscrire)
router.post('/signup', usersCtrl.signup);
// road for sign in (se connecter)
router.post ('/signin',usersCtrl.signin);




module.exports = router;