const path =  require("path");
const http = require('http')
const publicPath = path.join(__dirname, "../public");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000 ;
const socketIO = require('socket.io');

app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) =>{
    console.log('New user connected')


socket.emit('newMessage' , {
    from:'Admin',
    text:'welcom to the chat app',
    createdAt: new Date().getTime()
});

    socket.broadcast.emit("newMessage" , {
        from: 'Admin' ,
        text: 'New user joined',
        createdAt: new Date().getTime()
    })

 
socket.on('createMessage' , (message) =>{
    console.log('createMessage' , message);
    io.emit('newMessage', {
        from: message.from,
        text:message.text, 
        createdAt:new Date().getTime()
    })

  
});

    socket.on('disconnected' , () =>{
        console.log('user was disconnected')
    })
});

server.listen(port , () => {
    console.log(`App listening on port ${port} `);
} );
