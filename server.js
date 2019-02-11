const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 4777;

app.use(express.static(__dirname + '/dist/deploy-test')); // linux


app.get('*', (req, res) => res.sendFile(path.join(__dirname,'dist/deploy-test/index.html')));

const server = http.createServer(app);

server.listen(port, () => console.log("Server running on:"+port));


