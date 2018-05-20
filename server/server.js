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
    from:"jigar",
    text:"hiiiii",
    CreatedAt:123,
})
socket.on('createMessage' , (message) =>{
    console.log('createMessage' , message);
})

    socket.on('disconnected' , () =>{
        console.log('user was disconnected')
    })
} )

server.listen(port , () => {
    console.log(`App listening on port ${port} `);
} );
