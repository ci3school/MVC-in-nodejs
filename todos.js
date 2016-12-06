var express = require('express');

var router = express.Router();

var todoItems = [
	{id: 1, desc: 'Item1'},
	{id: 2, desc: 'Item2'}
];

router.get('/', function(req, res){
	//Load the data from DB here
	res.render('index', {
		title: 'My App',
		items: todoItems
	});
});

router.post('/add', function(req, res) {
	var newItem = req.body.newItem;
	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});
	res.redirect('/');
});

module.exports = router;