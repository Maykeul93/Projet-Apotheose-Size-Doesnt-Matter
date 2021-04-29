const express = require('express');
const router = express.Router();
const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');
const errorsMiddlewares = require('../controllers/errorsMiddlewares');


router.use('/',userRouter);
router.use('/',adminRouter);
router.use(errorsMiddlewares.error404);

module.exports = router;