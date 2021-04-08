const io=require('socket.io')(4000);
const express=require('express');
const path=require('path');
const app=express();

//setup static middelware
app.use(express.static(path.join(__dirname,'../public')));

const users = {};

io.on('connection',socket=>{

    socket.on('user-joined',name=>{
        console.log("new user joined "+name);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    });

});

app.listen(3000,()=>{
    console.log('server started');
})