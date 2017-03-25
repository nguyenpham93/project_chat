/** Đây là file khởi động toàn bộ hệ thống chat server **/

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const shortid = require('shortid');
const auth = require('./auth').auth;

const User = require('./user.js').User;
const Token = require('./user.js').Token;

let users = [];
let tokens = [];

function run(socket){
	auth(socket,users,tokens);
}

io.on('connection',run);

app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/views/index.html');
});

server.listen(3000,function () {
	console.log('Running on port 3000')
})

