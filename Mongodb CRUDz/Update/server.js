var express = require('express');
 var app = express();
 var path = require('path');
var adminRouter = express.Router();
var mongoose = require('mongoose');

//connect db
mongoose.connect('mongodb://localhost/nodedb');


//Check Db Connection
/*var db = mongoose.connection;
db.once('open', function() {   
  console.log("I am done");
});*/

//Creating User Schema 
var UserSchema = new mongoose.Schema({
    Name: String,
    Age: Number,
    Gender: String
});
// Compile a 'User' model using the userSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Users' for these documents.
var User = mongoose.model('users', UserSchema);

User.findById('57860eea14bea2f3071d98bd', function (err, users) {
    
    User.update({ Name: 'ChangedShetty' }).exec();
});

adminRouter.get('/', function(req, res){
   res.send('I am the dashboard!');
    res.json(Rec1);
 });

app.use('/admin', adminRouter);

// start the server
 app.listen(1337);
 console.log('1337 is the magic port!');