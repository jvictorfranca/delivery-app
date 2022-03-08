require('dotenv').config();
const { socketIoServer } = require('./serverIo');

const portIo = process.env.SOCKETIO_PORT || 5001;

const port = process.env.PORT || 3001;

const app = require('./app');

app.listen(port);
console.log(`Api rodando na porta ${port}`);

socketIoServer.listen(
    portIo, console.log(`Socket.io server listening on port ${portIo}`),
);