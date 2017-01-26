// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path 		= require('path');


// Routes
// =============================================================
module.exports = function(app){

	// Each of the below routes just handles the HTML page that the user gets sent to.
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/Table.html'));
	});

	// app.get('/index', function(req, res){
	// 	res.sendFile(path.join(__dirname + '/../public/indexx.html'));
	// });

	// table password check
	app.post('/passCheckTable', function(req, res){
		console.log(req.body);
		if(req.body.userInput == "Designer16"){
			console.log('string');
			var tempObject = {ready:"go"}
			res.send(tempObject);
		}
	});

	//master password check
	app.post('/passCheckMaster', function(req, res){
		console.log(req.body);
		if(req.body.userInput == "Iamnotababysitter"){
			console.log('string');
			var tempObject = {ready:"go"}
			res.send(tempObject);
		}
	})

	app.get('/Table', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/Table.html'));
	});



	app.get('/PublisherEditor', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/PublisherEditor.html'));
	});
	
	app.get('/MasterEditor', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/MasterEditor.html'));
	});

}
