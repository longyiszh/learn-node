'use strict';

const http = require('http');
const express = require('express');
const fs = require('fs');

const configJson = fs.readFileSync('./config.json'); //Synclly

fs.readFile('./readFile.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});

const config = JSON.parse(configJson);

const app = express();

app.use(express.static(config.webServer.root));

const httpServer = http.createServer(app);

httpServer.listen(config.webServer.port, function(err) {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(`Web server listening on port ${ config.webServer.port }`);
});
