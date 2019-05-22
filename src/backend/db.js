const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://gray:gray@formdemo-pypmx.gcp.mongodb.net?retryWrites=true";

const dbName = 'forms'

module.exports = { connect };

function connect() {
    return new Promise((resolve) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function(err, mongoDB) {
            if (err) throw err;
            const dbo = mongoDB.db(dbName);
            resolve(dbo); 
          });
    });
}



// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
