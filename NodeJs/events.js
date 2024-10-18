// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', function(a, b) {
//   console.log(a, b, this, this === myEmitter);
//   // Prints:
//   //   a b MyEmitter {
//   //     _events: [Object: null prototype] { event: [Function (anonymous)] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined,
//   //     [Symbol(shapeMode)]: false,
//   //     [Symbol(kCapture)]: false
//   //   } true
// });
// myEmitter.emit('event', 'a', 'b');

const EventEmitter=require('events');

class MyEmitter extends  EventEmitter{}

const myEmitter=new MyEmitter();

myEmitter.on('called',()=>{
    console.log("Call from xyz");

    setTimeout(()=>{
        console.log("You haven't receive a call do you want to end the call?");
    },3000);//after 3 seconds msg inside set timeout will printed in the console area.
})

myEmitter.emit('called');