const MongoClient = require('mongodb').MongoClient;

function connectToDatabase() {
  const uri = 'mongodb://localhost:27017/backendApp';

  return MongoClient.connect(uri)
    .then(client => {
      console.log("Connected to MongoDB database");
      return client.db();
    })
    .catch(error => {
      console.log("Error connecting to MongoDB database", error);
      throw error;
    });
}

module.exports = {
  connectToDatabase
};