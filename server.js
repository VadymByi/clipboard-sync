const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("Новое подключение " + socket.id);

  socket.on("copy", (data) => {
    console.log("Копирование данных: ", data);

    socket.broadcast.emit("paste", data);
  });

  socket.on("disconnect", () => {
    console.log("Подключение закрыто: " + socket.id);
  });
});

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Сервер работает на порту ${PORT}`);
});
