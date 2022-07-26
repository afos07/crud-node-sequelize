// import { Router } from 'express';
const { Router } = require('express');

const router = Router();

const UserController = require('./controllers/UserController');

router.post('/', UserController.store);
router.put('/:id', UserController.update);
router.get('/', UserController.read);

module.exports = router;