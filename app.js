var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.set('views','./app/views/pages');
app.set('view engine','jade');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

require('./config/routes')(app);

app.listen(port);
console.log('Server started on port ' + port);


