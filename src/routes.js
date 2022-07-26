// import { Router } from 'express';
const { Router } = require('express');
const User = require('./models/User');
const router = Router();

router.post('/', async (req, res)=>{
  const { nome, email } = req.body;

  const user = await User.create({nome, email});

  res.json(user);
})

module.exports = router;