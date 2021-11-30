const EventsEmitter = require('events')

const emitter = new EventsEmitter()

emitter.on('log',(a,b) => {
    console.log("log event triggered");
    console.log(a,b);
})

emitter.emit('log','arg 1','arg 2')

