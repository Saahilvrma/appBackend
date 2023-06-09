
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



  async function getArtWork (req,response)  {
  
    try{
        var ArtWork = require('../models/ArtWork');
        ArtWork.find().then((data) => {
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
    addArtWork,getArtWork,
  };