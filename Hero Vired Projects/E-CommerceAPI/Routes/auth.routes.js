const express = require('express');
const authRouter = express.Router();
const authController = require('../Controllers/auth.controller');

authRouter.post('/auth/signup',signup);
authRouter.post('/auth/login',login);

module.exports = authRouter;
