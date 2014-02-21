var colors = require('colors');


console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow (ignores spaces)

var Circle = require('circle.js');
var circle = Circle(2,2,5);
console.log(circle.r_sq());
console.log(circle.area());	

var Circle1 = require('circle.js');
var circle1 = Circle1(3,2,9);
console.log(circle1.r_sq());
console.log(circle1.area());	

var buf = new Buffer('Hello world!');

//console.log(buf.length);

/*var fs = require('fs');
fs.readFile('/var/www/node/test.txt', function(err, fileContent){
	if(err){
		throw err;
	}
	console.log(fileContent);
	console.log('file content', fileContent.tostring());
});*/

/*var req = http.request(options, function(response){
	response.on("data", function(data){
		console.log("Response",data);	
	});

	response.on("end" , function(){
		console.log("Response ended");
	});
});

req.end();


var em = new (require('events').EventEmitter)();
em.emit('events');
em.emit('error',new Error('My mistake'));*/






var x = 1;
var foo = function(callbackfn){
	return callbackfn(x * 2);
};

foo( function(x){
	console.log(x);
});



var events = require('events'),
util = require('util');
/*
var Foo = function(initial_no) { this.count = initial_no; };

Foo.prototype = new events.EventEmitter;
 
Foo.prototype.increment = function() {
var self = this;
setInterval(function() {
if(self.count % 2 === 1) self.emit('even');
self.count++;
}, 100);
};
 
var lol = new Foo(1);
 
lol.on('even', function() {
util.puts('Number is even! :: ' + this.count);
}).increment();

*/
 var events = require("events");
var eventbus = new events.EventEmitter;

eventbus.doit = function(fname){
var data = {name: fname};
this.emit("myEvent",data);
};

eventbus.on("myEvent",function(data){
console.log('event received myEvent '+data.name);
});

eventbus.doit('nishant');



var Person = {
  greet: function () {
    console.log("Hello world, my name is " + this.name);
  }
};
var frank = Object.create(Person);
console.log(Person);
frank.name = "Frank Dijon";
frank.greet();

var fs = require('fs');

/* fs.rename('/var/www/node/test1.txt', '/var/www/node/test.txt', function (err) {
  if (err) throw err;
  fs.stat('/var/www/node/test.txt', function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
});*/


 
var path = require('path');

var filePath = '/var/www/node/test.txt';

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err){
    console.log('received data: ' + data);
     fs.appendFile(filePath, ' -> ' + data + ' <- ', function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
      });
    }else{
        console.log(err);
    }

});


var http = require('http');
var server = http.createServer();

server.on('request', function(req,res){
    res.writeGead(200, {'content-Type':'text/plain'});
    res.write('Hello World!');
    res.end();
});

server.listen(4000);

 