// КОНСОЛЬНЫЙ ЧАТ МЕЖДУ СЕРВЕРОМ И КЛИЕНТОМ
import net from 'node:net';

const host = 'localhost';
const port = 8000;

const server = net.createServer((socket) => {
    console.log("\n\n\nСервер консольного чата запущен\n\n\n");
    process.stdin.on('data', (d) => {
        console.log("\n");
        const message = d.toString();
        socket.write(message);
    });
    socket.on('connect', () => { // почему-то это событие не срабатывает при подключении клиента
        console.log("Произошло соединение. Добро пожаловать в консольный чат!");
    });
    socket.on('data', (data) => {
        console.log("\nКлиент написал ------>", data.toString());
    });
    socket.on('end', () => {
        console.log("\nКлиент отключился!");
    });
    socket.on('error', (e) => {
        console.log("\nКлиент отключился!");
    })
})

server.listen(port, host);
