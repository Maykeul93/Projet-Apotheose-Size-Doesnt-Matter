const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');
const auth = require('../auth');


// road to modify role on users/admin
router.put('/admin/:id/role',auth.authAdmin, adminCtrl.updateRole);
// road for get all question
router.get('/admin/:id/question',auth.authAdmin, adminCtrl.getAllQuestions);
// road for get question by id
router.get('/admin/:id/question/:questionId',auth.authAdmin, adminCtrl.getQuestionById);
// road for get all tag
router.get('/admin/:id/tag',auth.authAdmin, adminCtrl.getAllTags);
// road for get tag by id
router.get('/admin/:id/tag/:tagId',auth.authAdmin, adminCtrl.getTagById);
// road for create question
router.post('/admin/:id/question',auth.authAdmin, adminCtrl.createQuestion);
// road for create tag
router.post('/admin/:id/tag',auth.authAdmin, adminCtrl.createTag);
// road for delete a question
router.delete('/admin/:id/question/:questionId',auth.authAdmin, adminCtrl.deleteQuestion);
// road for delete a tag
router.delete('/admin/:id/tag/:tagId',auth.authAdmin, adminCtrl.deleteTag);
// road for delete a user
router.delete('/admin/:id/user/:userId',auth.authAdmin, adminCtrl.deleteUser);
// road for update question
router.put('/admin/:id/question/:questionId',auth.authAdmin, adminCtrl.updateQuestion);


module.exports = router;