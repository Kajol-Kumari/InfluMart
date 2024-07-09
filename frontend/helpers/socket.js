// socket.js
import io from 'socket.io-client';
import { API_ENDPOINT } from '@env';

const SOCKET_URL = API_ENDPOINT;

const socket = io(SOCKET_URL, {
  transports: ['websocket'],
});

export default socket;
