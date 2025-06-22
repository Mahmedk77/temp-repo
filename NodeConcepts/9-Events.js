const EventEmitter = require('events');
const customEvent = new EventEmitter() //creating an instance 

//starts listening for a trigger
customEvent.on('response', (name,id)=>{
    console.log(`hello ${name}, ${id}`);
    
})

//triggering the .on event 
customEvent.emit('response', 'ahmedDon', 34)

// customEvent.on(event, cb)
// customEvent.emit(event, data)
//.on can only be triggered using .emit

