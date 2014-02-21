
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
 

 var doc;

//Get
app.get('/', function(req,res){
    
        var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://192.168.3.8:27017/test', function (err, db) {
    if (err) {
        throw err;
    } else {
        
       
          if(err) { return console.dir(err); }

          var collection = db.collection('test');
          
          
    

          collection.find().each(function(err, doc) {
          if(doc != null) console.log("Doc from Each ");
          console.dir(doc);
        });

            

          //  var stream = collection.find().stream();
            

             
           // console.log( );
          
 
          
       
    }
    //db.close();
});


    res.render('html', { 
        title: 'HTMl',
        message: '',
        value:doc,
        errors: {}        
    });            
});

 
 
var server = http.createServer(app).listen(app.get('port'), function(){ 
  //console.log("Express server listening on port " + app.get('port'));
});
