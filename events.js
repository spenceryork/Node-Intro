const { EventEmitter } = require('events');

const emitter = new EventEmitter();

// Create anevent handler
let connectHandler = () => {
    console.log('connection successful');
   
    // Fire the data_received event
    emmiter.emit('data_received')

}

// Bind the connection event with the handler
emmiter.on('connection', connectHandler);

// Bind the data_received event with the anon func
emmiter.on('data_received', () => {
    console.log("data received successfully");
});

// Fire the connection event
emmiter.emit('connection');
console.log("emitter", emitter.emit);
console.log('Program ended');
