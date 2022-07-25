// import { Router } from 'express';
const { Router } = require('express');

const router = Router();

router.get('/', (req, res)=>{
  res.json('Olá mundo NODE API');
})

module.exports = router;