/*var path = require ('path');
fs = require('fs');

require('http').createServer(function(req,res){
    var file = path.normalize('.' + req.url);
    console.log('trying to server', file);
    
    function reportError(err){
        console.log(err);
        res.writeHead(500);
        res.end('Internal Server error');
    }
    
    path.exists(file , function(exists){
       if(exists){
           fs.stat(file , function(err, stat){
             var rs;
             if(err){
                 return reportError(err);
             }
               
             if(stat.isDirectory()){
                 res.writeHead(403);res.end('forbidden');
             }else{
                 rs = fs.createReadStream(file);
                 rs.on('error',reportError);
                 res.writeHead(200);
                 rs.pipe(res);
             } 
               
           });
       }else{
           
           res.writeHead(404);
           res.end('Not Found');
       } 
        
    });
    
    
}).listen(4005);

*/
var http = require("http"); 
var url = require("url");
var express = require('express')
 
  , http = require('http')
  , path = require('path')
  , expressValidator = require('express-validator'); //Declare Express-Validator

var app = express();
app.post('/', function(req,res){ console.log(app.post);
    req.assert('name', 'Name is required').notEmpty();           //Validate name
    req.assert('email', 'A valid email is required').isEmail();  //Validate email

    var errors = req.validationErrors();  
    if( !errors){   //No errors were found.  Passed Validation!
        res.render('index', { 
            title: 'Form Validation Example',
                message: 'Passed Validation!',
                errors: {}
        });
       
    }
    else {   //Display errors to user
        res.render('index', { 
            title: 'Form Validation Example',
            message: '',
            errors: errors
        });
    }
 });
 
 


var server = http.createServer(function(request, response) {console.log(request.url);
    
  
    
    
 
 
 /*
 
    var params = url.parse(request.url,true).query;

    var name1 = params.name; 
    var email1 = params.email;
    
    var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://192.168.3.8:27017/test', function (err, db) {
    if (err) {
        throw err;
    } else {
        
       
          if(err) { return console.dir(err); }

          var collection = db.collection('test');
          
          
          var docs = [{name:name1,email:email1}];

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
    */
    
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE 'html'>");
  response.write("<html>");
  response.write("<head>");
  response.write("<link src='http://nodejs.org/api/assets/style.css' >");
  
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("<form name='abc' action='/' method='POST'><input type='text' name='name' value='' ><input type='text' name='email' value=''><input type ='submit' ></form>");
  response.write("</body>");
  response.write("</html>");
  response.end(); 
});
 
server.listen(4005);

console.log("Server is listening"); 
 