import net from 'net';

const socket = new net.Socket();

const user = {
    name: 'Nikolas ',
    surname: 'Garin '
}

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
            socket.write(user.name + user.surname + "написал: " + message);
        }
    })
});

socket.on('data', (d) => {
    console.log(d.toString());
});

socket.on('error', (e) => {
    console.log("Соединение разорвано. Сервер завершил работу!");
});