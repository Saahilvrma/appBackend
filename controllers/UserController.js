
const MyModel = require('../models/users');

async function addDataToDb (req, res)  {
    try {
        const newData = new MyModel(req.body);
        await newData.save();
        res.status(200).json({ message: 'Data added to database.' });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding data to database.' });
      }
};


module.exports = {
    addDataToDb,
  };