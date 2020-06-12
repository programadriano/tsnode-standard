"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyparser = require("body-parser");
const express = require("express");
const uploadAzure_1 = require("./uploadAzure");
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});
app.post('/', uploadAzure_1.default.single('avatar'), (req, res) => {
    if (!req.file) {
        res.send('Erro ao fazer upload do arquivo!');
    }
    else {
        res.send('Arquivo enviado com sucesso!');
    }
});
app.listen(3000, function () {
    console.log('listening on port 3000!');
});
