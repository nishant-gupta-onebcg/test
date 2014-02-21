var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://192.168.3.8:27017/test', function (err, db) {
    if (err) {
        throw err;
    } else {
        
       
          if(err) { return console.dir(err); }

          var collection = db.collection('test');
          
          
          var docs = [{mykey:1,name:'Abc'}, {mykey:2}, {mykey:3}];

          collection.insert(docs,   function(err, result) {

            collection.find().toArray(function(err, items) {});

            var stream = collection.find({mykey:{$ne:2}}).stream();
            stream.on("data", function(item) {});
            stream.on("end", function() {});

            collection.findOne({mykey:1}, function(err, item) {});
            console.log("Record added as "+result[0]._id);
          });
 
          console.log("successfully connected to the database");
       
    }
    //db.close();
});