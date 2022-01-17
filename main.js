$(function() {
    var socket = io("wss://xpto.com:443");
    socket.on("d", function(data) {
        data = JSON.parse(data);
        console.log(data);
    });
    statusQuerySocket = function() {
        socket.emit("d", JSON.stringify(statusQueryData))
    };
    setInterval(statusQuerySocket, 500)
});