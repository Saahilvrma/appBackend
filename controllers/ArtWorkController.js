
const ArtWork = require('../models/ArtWork');

async function addArtWork (req, res)  {
    try {
        const newData = new ArtWork(req.body);
        let dataRes =   await newData.save();
        console.log(dataRes)
        res.status(200).json({ message: 'Data added to database.',data: dataRes});
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding data to database.' });
      }
};


module.exports = {
    addArtWork,
  };