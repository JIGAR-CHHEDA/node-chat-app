var socket = io();

            socket.on('connect' , function(){
                console.log('connected to server');

                // socket.emit('createMessage' , {
                //     from:"jiggy",
                //     text:"helllooo",
                // })
            })

            
            socket.on('disconnect' , function() {
                console.log('Disconnected to server')
            })

            socket.on('newMessage' , function(message){
               console.log("newMessage" , message) 
            })