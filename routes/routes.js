const express = require('express');
const router = express.Router();


const userController = require('../controllers/UserController');

const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/add-data', userController.addDataToDb);

module.exports = router;