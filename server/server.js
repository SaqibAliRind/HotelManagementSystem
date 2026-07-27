import app from "./app.js";
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config({ quiet: true });

const port = process.env.PORT || 7000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // allow all origins for now or define client URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
  }
});

// Attach io to app so it can be used in controllers: req.app.get('io')
app.set("io", io);

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Example generic notification event
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(port, () => {
    console.log(`listening to port ${port}`);
});