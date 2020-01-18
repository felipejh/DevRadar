import socketio from 'socket.io-client';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const socket = socketio('http://192.168.0.10:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction){
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    }
    
    socket.connect();

}

function disconnect(){
    socket.disconnect;
}

export{
    connect,
    disconnect,
    subscribeToNewDevs
}