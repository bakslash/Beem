 
const express = require('express');
const router = express.Router();

const netController = require('../controllers/index');


router.get(`/networks/:mcc`,netController.network); //mcc
router.get(`/networks`,netController.networkName);//country


module.exports = router;
