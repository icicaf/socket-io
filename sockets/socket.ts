import { Socket } from 'socket.io';
import socketIO from 'socket.io';

// Listening client disconect
export const disconnect = (client: Socket) => {
  client.on('disconnect', () => {
    console.log('client disconnect');
  });
};

// listening menssage client
export const message = (client: Socket, io: socketIO.Server) => {
  client.on('message', (payload: { from: string; body: string }) => {
    console.log('Message recibed', payload);

    io.emit('new-message', payload);
  });
};
