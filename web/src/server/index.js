const express = require('express');
const webpack = require('webpack');
const http = require('http');
const webpackDevMiddleware = require('webpack-dev-middleware');
const { Server } = require('socket.io');
const path = require('path');
const initViewerNamespace = require('./viewer');
const initControllerNamespace = require('./controller');

const app = express();
const server = http.createServer(app);

const config = require('../../webpack.config.js');
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.use(express.static('/app/public'));

server.listen(config.devServer.port, () => {
    console.log('Hello World!\n');
});

const io = new Server(server);
initViewerNamespace(io);
initControllerNamespace(io);