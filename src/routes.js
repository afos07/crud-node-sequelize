// import { Router } from 'express';
const { Router } = require('express');

const router = Router();

const UserController = require('./controllers/UserController');

router.post('/', UserController.store);

module.exports = router;