var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


 
function Animal(name) 
{
    this.name = name;
}

Animal.prototype.walk = function (destination) 
{
    console.log(this.name, 'is walking to', destination);
};
var animal = new Animal('elephant');
animal.walk('melbourne'); // elephant is walking to melbourne

module.exports = router;
