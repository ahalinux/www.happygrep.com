var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.set('views','./views/pages');
app.set('view engine','jade');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'bower_components')));

app.listen(port);
console.log('Server started on port ' + port);

// index page
app.get('/', function(req,res){
    res.render('index',{
        title: '首页',
        movies:[{
            title:'机械战警',
            _id:1,
            poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
        }]
    })
})

// detail page
app.get('/article/:id', function(req,res){
    res.render('detail',{
        title: '详情页'
    })
})

// admin page
app.get('/admin/article', function(req,res){
    res.render('admin',{
        title: '后台录入页'
    })
})

// list page
app.get('/admin/list', function(req,res){
    res.render('list',{
        title: '列表页'
    })
})