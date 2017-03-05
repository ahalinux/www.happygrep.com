
module.exports = function(app){
    
    // index page
    app.get('/', function(req,res){
        res.render('index',{
            title: 'ahalinux \'s 休闲游戏馆',
            webtitle: 'INDEX',
            articles:[{
                _id: 1,
                ifactive: false,
                type: "GAME",
                ttype: "2D",
                tstatus: "IN DEVELOPMENT",
                tplatform1: "IOS",
                tplatform2: "ANDROID",
                title: '下一个 “ 植物大战僵尸？”',
                poster: '/_images/game_2d/glitch/0.png',
                buttontext: 'Coming Soon',
            },{
                _id: 2,
                ifactive: true,
                type: "GAME",
                ttype: "VR",
                tstatus: "BETA 1.0.1",
                tplatform1: "IOS",
                tplatform2: "ANDROID",
                title: 'X - 防御者 VR',
                poster: '/_images/game_vr/x_defender_vr/0.png',
                buttontext: '更多内容',
            }]
        })
    })

    // detail page
    app.get('/article/:id', function(req,res){
        res.render('detail',{
            title: 'ahalinux \'s 休闲游戏馆',
            webtitle: 'DETAIL',
            article:{
                title: 'X-Defender VR',
                poster0:'/_images/game_vr/x_defender_vr/0.png',
                poster1:'/_images/game_vr/x_defender_vr/1.png',
                poster2:'/_images/game_vr/x_defender_vr/2.png',
                poster3:'/_images/game_vr/x_defender_vr/3.png',
                gamename_cn: 'X-防御者 VR',
                gamename_en: 'X-Defender VR',
                gametype: 'VR',
                gameplatform: 'Android Phone',
                peripherals: 'Google Cardboard or Xiaomi VR Play',
                gamelanguage: '国语 英语',
                gameversion: 'beta 1.0.1',
                lastupdate: '2017-01-30',
                devtools: 'Unity5 & Blender',
                devlogo: '/_images/other_logo/github.png',
                devsource: 'https://github.com/ahalinux/X-Defender-VR',
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
}

