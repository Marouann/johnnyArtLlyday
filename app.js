var express = require('express')

var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('*', function (req, res) {
    res.render("index");
});

var id = 1;

var server = app.listen(process.env.PORT || 3000);
var io = require('socket.io')(server);
var ent = require('ent');
