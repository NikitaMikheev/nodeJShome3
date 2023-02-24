import net from 'node:net';

const socket = new net.Socket();

socket.connect({
    host: 'localhost',
    port: 8000
}, () => {
    console.log("\n\n\nДобро пожаловать в консольный чат! Для завершения соединения введите -end\n\n\n");
    process.stdin.on('data', (d) => {
        console.log("\n");
        const message = d.toString();

        if(message == "-end\r\n") {
            socket.end();
            console.log("Вы отключились от сервера!");
        }

        else {
            socket.write(message);
        }
    })
});

socket.on('data', (d) => {
    console.log("\nСервер написал ----> " + d);
});

socket.on('error', (e) => {
    console.log("Соединение разорвано. Сервер завершил работу!");
});