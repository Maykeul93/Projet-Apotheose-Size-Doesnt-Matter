const express = require('express');

const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');



// road to modify role on users/admin
router.put('/admin/role',adminCtrl.updateRole);




module.exports = router;