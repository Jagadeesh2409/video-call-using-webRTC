module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);
    require('./live')(io,socket)

    socket.on('disconnect', () => {
      console.log('user disconnected:', socket.id);
    });
  });
};
