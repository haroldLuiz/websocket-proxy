const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const querystring = require('querystring');
io.on('connection', (socket) => {
  socket.on('d', (msg) => {
    msg = querystring.stringify(JSON.parse(msg));
    console.log('d: ' + msg);
    console.log(socket.request.headers.cookie);
    var out = "";
    var reqo = http.request({
      host: '127.0.0.1',
      port: 80,
      method: "POST",
      path: '/XPTO/endpoint',
      headers: {
        Host: "127.0.0.1",
        'Content-Length': msg.length,
        'Cookie': socket.request.headers.cookie,
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
      },
    }, function (res) {
      res.on('data', function (chunk) {
        out += chunk;
      });
      res.on('end', function(){
        console.log(out);
        socket.emit('d', out);
      });
    });
    reqo.write(msg);
    reqo.end();
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
