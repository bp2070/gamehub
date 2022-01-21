const initControllerNamespace = io => {
    io.of('controller').on('connection', socket => {
        console.log('controller connected:', socket.id);
    });
};

module.exports = initControllerNamespace;