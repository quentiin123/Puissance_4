const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('Quelqu\'un s\'est connecté');

    socket.on('message', (message) =>     {
        console.log(message);
        io.emit('message', `Joueur ${socket.id.substr(0,2)} a dit ${message}` );   
    });
});

http.listen(8080, () => console.log('On se place sur http://localhost:8080') );



