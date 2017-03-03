var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.set('views','./views/pages');
app.set('view engine','jade');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.listen(port);
console.log('Server started on port ' + port);

// index page
app.get('/', function(req,res){
    res.render('index',{
        title: 'INDEX',
        articles:[{
            title:'VR Game X-Defender',
            _id:1,
            poster:'./_images/0.png'
        }]
    })
})

// detail page
app.get('/article/:id', function(req,res){
    res.render('detail',{
        title: 'DETAIL',
        article:{
            title: 'X-Defender VR',
            poster:'./_images/0.png',
            gamename_en: 'X-Defender VR',
            gamename_cn: '防御者 VR',
            gametype: 'VR',
            gameplatform: 'Android Phone',
            peripherals: 'Google Cardboard or Xiaomi VR Play',
            gamelanguage: '国语 英语',
            gameversion: 'beta 1.0.1',
            lastupdate: '2017-01-30',
            devtools: 'Unity Blender',
            packagelink: 'https://pan.baidu.com/s/1qYIvSwG',
            packagepassword: 'i3ie',
            gamesummary: '这是一个经典塔防游戏的 VR 版本'
        }
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