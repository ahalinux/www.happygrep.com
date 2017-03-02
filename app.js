var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views','./views');
app.set('view engine','jade');

app.listen(port);
console.log('Server started on port ' + port);

// index page
app.get('/', function(req,res){
    res.render('index',{
        title: 'Hello World'
    })
})