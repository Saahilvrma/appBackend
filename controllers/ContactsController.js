
const Contact = require('../models/Contact');
const mongoose = require('mongoose');

async function addContacts (req, res)  {
    try {

        const newData = new Contact(req.body);
        let dataRes =   await newData.save();
        console.log(dataRes)
        res.status(200).json({ message: 'Data added to database.',data: dataRes});
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding data to database.' });
      }
};


async function getContacts (req,response)  {
  
    try{
        var Contact = require('../models/Contact');
        Contact.find().then((data) => {
            console.log(data);
            let dataResult = data;
           
            response.status(200).json({ message: 'Data fetch from database.',data: dataResult});
        })
        
    }catch (error) {
        console.log(error);
        response.status(500).json({ message: 'Error Data not fetch from database.' });
    }
        

        
};


module.exports = {
    addContacts,getContacts,
  };