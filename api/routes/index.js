 
const express = require('express');
const router = express.Router();

const netController = require('../controllers/index');


router.get(`/networks`,netController.network);


module.exports = router;