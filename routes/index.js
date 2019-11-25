var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/presentation/home', { 
  			title: 'Express',
  			css :[
  				'/stylesheets/presentation/home.css'  			
  			],
  			jsExternal : [
  				'https://unpkg.com/react@16/umd/react.production.min.js',
  				'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js'
  			] 
  		});
});

module.exports = router;
