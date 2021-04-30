 
const express = require('express');
const router = express.Router();

const netController = require('../controllers/index');


router.get(`/networks/:mcc`,netController.network);
router.get(`/networks/:country`,netController.networkName);


module.exports = router;