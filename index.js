const express = require('express');
const path = require('path');
const app = express();

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('public', __dirname + '/public');

app.get('/', function (req, res) {
	res.render('index.html')
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});