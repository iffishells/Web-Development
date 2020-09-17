const Express = require("express");
const BodyParser =  require('body-parser');
const Path = require('path');
const Ejs = require('ejs');

const App = Express();


App.use(Express.static(Path.join(__dirname , 'public')));
App.use(BodyParser.urlencoded({extended : true}));
App.use(Express.static('public'));
App.set('view engine' ,'ejs');



App.get('/' , function(req, resp)
{
    resp.render("index.ejs")
})

// App.post('/', function(req, resp)
// {
    // 
// })
// 
App.listen(3000,function(req, resp)
{
    console.log("your server is listen at 3000 port");
});