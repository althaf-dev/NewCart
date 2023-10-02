

const mongoClient = require("mongodb").MongoClient;
var state = {

    db: null
}

module.exports.connect = function (done) {

  
    const url = "mongodb://mongo:YRJsmoowTveKh54p1BDp@containers-us-west-61.railway.app:6508";
    const dbname = 'shopping';

    var client = new mongoClient(url);
    client.connect().then((client) => {
        state.db = client.db(dbname);

       
          done();

 



    })
}


module.exports.get = function () {
    return state.db;
}
