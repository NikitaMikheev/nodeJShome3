import net from 'node:net';

const host = 'localhost';
const port = 8000;

const sockets = [];

const server = net.createServer((socket) => {
    sockets.push(socket);
    socket.on('data', (data) => {
        sendMessage(socket, data.toString());
    });
})

function sendMessage(socket, data) {
    for (let index = 0; index < sockets.length; index++) {
        if(sockets[index]!==socket) {
            sockets[index].write(data);
        }
    }
}

server.listen(port, host);