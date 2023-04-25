const express = require('express');
const router = express.Router();


const userController = require('../controllers/UserController');
const ArtWorkController = require('../controllers/ArtWorkController');
const ContactsController = require('../controllers/ContactsCOntroller');

const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/add-data', userController.addDataToDb);
router.post('/add-artwork', ArtWorkController.addArtWork);
router.get('/get-artwork', ArtWorkController.getArtWork);
router.post('/add-contacts', ContactsController.addContacts);
router.get('/get-contacts', ContactsController.getContacts);

router.get('/hi',(req,res)=>{
    res.send('Hello')
})

module.exports = router;