var personalDetails = require('../data/friend.js');



 module.exports = function (app) {

 	app.get('api/friends', function (req,res) {
 		res.json(personalDetails);
 	})
 };