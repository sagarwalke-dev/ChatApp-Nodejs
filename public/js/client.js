const socket=io('http://localhost:4000',{ transport :['websocket', 'polling', 'flashsocket'] });
const form=document.getElementById('send-container');
const inputMessage=document.getElementById('inputMessage');

const messageContainer=document.querySelector('.container');

let name=prompt('Enter Your Name');

socket.emit('user-joined',name);