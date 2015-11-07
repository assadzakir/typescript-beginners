/// <reference path="typings/tsd.d.ts" />

var http = require('http');
var url = require('url');
var server = http.createServer((req,res)=>{
	var request = url.parse(req.url).pathname;
	if(request  === '/even' ){
	res.end('even')
	}
	else if(request === "/odd"){
			
			res.end('odd')
	}else{
		res.end('thank you')
	}
	
})
server.listen(3000,function(){
	console.log('server is listening on port 3000')
});