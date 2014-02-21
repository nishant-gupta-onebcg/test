
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('routes')
  , user = require('user')
  , http = require('http')
  , path = require('path')
  , expressValidator = require('express-validator'); //Declare Express-Validator

var app = express();

 
  app.set('port', process.env.PORT || 3001);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
 
 
  app.use(express.bodyParser());
  app.use(expressValidator());  //required for Express-Validator
  app.use(express.methodOverride());
  app.use(app.router);
 
  app.use(express.static(path.join(__dirname, 'public')));
 

 

//Get
app.get('/', function(req,res){
    res.render('form', { 
        title: 'Form Validation Example',
        message: '',
        errors: {}        
    });            
});

//Post
app.post('/', function(req,res){
    var name = req.body.username;
    var email = req.body.email;
    if(name == '') {
        res.render('form', { 
        title: 'Form Validation Example',
        message: '',
        errors: {}        
    });            
        return false;
    }
    
    if(email == '') {
        res.render('form', { 
        title: 'Form Validation Example',
        message: '',
        errors: {}        
    });            
        return false;
    }
    
    var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://192.168.3.8:27017/test', function (err, db) {
    if (err) {
        throw err;
    } else {
        
       
          if(err) { return console.dir(err); }

          var collection = db.collection('test');
          
          
          var docs = [{name:name,email:email}];

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

 res.render('form', { 
        title: 'Form Validation Example',
        message: '',
        errors: {}        
    });            
      
 });
 
var server = http.createServer(app).listen(app.get('port'), function(){ 
  //console.log("Express server listening on port " + app.get('port'));
});
