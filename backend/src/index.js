const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express(); // Cria a aplicação
const server = http.Server(app); // Servidor http fora do express

setupWebsocket(server);

mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-kdphk.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); // Configuração válida para toda a aplicação
app.use(routes); // para usar o routes importados

server.listen(3333);