//练习代码
// var http = require('http');
// http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');

//自己配置路由的写法,然而在页面内加载图片跪了，。。。。
// var express = require("express");
// var fs = require("fs");
// var app = express();
// var port = process.env.PORT || 3000;
// fs.readFile('./views/page2.html','utf-8', function(err,data){
//  if(err){
//   console.log(err);
//  }else{
//   html2 = data;
//  }
// });
// fs.readFile('./views/page1.html','utf-8', function(err,data){
//  if(err){
//   console.log(err);
//  }else{
//   html1 = data;
//  }
// });

// app.set("views","./views");
// app.listen(port);
// console.log("Server start at" + port);

// app.get("/views/page1.html",function(req,res){
// 	res.writeHead(200, {'Content-Type': 'text/html'});
//  	res.end(html1);
// })

// app.get("/views/page2.html",function(req,res){
// 	res.writeHead(200, {'Content-Type': 'text/html'});
//  	res.end(html2);
// })



//直接使用espress的静态服务器
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/views"));
app.listen(port);
console.log("Server start at" + port);

