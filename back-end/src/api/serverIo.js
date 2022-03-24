require('dotenv').config();
const socketio = require('socket.io');

const protFrontEnd = process.send.FRONT_END_PORT || 3000;

const socketIoServer = require('http').createServer();

const io = socketio(socketIoServer, {
  cors: {
    origin: `http://localhost:${protFrontEnd}`,
    methods: ['GET'],
  },
});

io.on(
  'connection', (socket) => {
    console.log(`uma nova coneção foi feita com${socket.id}`);
  },
);

module.exports = {
  io, socketIoServer,
};