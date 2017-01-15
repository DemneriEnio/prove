var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = new express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://enio:login@ds019866.mlab.com:19866/account');

mongoose.connection.once("open", function() {
var userSchema = new mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password: String
});

var User = mongoose.model('User', userSchema);

app.post('/get_sign', function(req, res){
	var user = {
		username: req.body.username,
		password: req.body.password
	};
	
	User.create(user, function(err, user){
	if(err){
		console.log(err);
	}else{
		console.log('User created');
	  }
    
});

		User.findOne({username: req.body.username}, function(err, user){
			if(err){
				console.log(err);
			}
			else{
			if(user.password === req.body.password){
				console.log("Logged In");
			}	
			else{
				console.log("Incorrect password");
			}			
			}
		});
	
});
});

app.listen(8000);