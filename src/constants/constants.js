import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_SOCKET_URL, {
    withCredentials: true,
});

const socketEvent = {
    SENSORS_DATA: "SENSORS_DATA",
    WANT_TRACKING_DATA: "WANT_TRACKING_DATA",
};

export { socket, socketEvent };
