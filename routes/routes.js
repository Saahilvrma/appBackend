const express = require('express');
const router = express.Router();


const userController = require('../controllers/UserController');

const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/add-data', userController.addDataToDb);
router.get('/hi',(req,res)=>{
    res.send('Hello')
})

module.exports = router;