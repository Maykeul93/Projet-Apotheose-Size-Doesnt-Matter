const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');



// road to modify role on users/admin
router.put('/admin/role', adminCtrl.updateRole);
// road for get all question
router.get('/admin/question', adminCtrl.getAllQuestions);
// road for get question by id
router.get('/admin/question/:id', adminCtrl.getQuestionById);
// road for get all tag
router.get('/admin/tag', adminCtrl.getAllTags);
// road for get tag by id
router.get('/admin/tag/:id', adminCtrl.getTagById);
// road for create question
router.post('/admin/question', adminCtrl.createQuestion);
// road for create tag
router.post('/admin/tag', adminCtrl.createTag);
// road for delete a question
router.delete('/admin/question/:id', adminCtrl.deleteQuestion);
// road for delete a tag
router.delete('/admin/tag/:id', adminCtrl.deleteTag);
// road for delete a user
router.delete('/admin/user/:id', adminCtrl.deleteUser);


module.exports = router;