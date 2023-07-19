const EventEmitter = require("events");

const event = new EventEmitter();
 
// event.on("sayName", () => {
//     console.log("manisha")
// })

// event.on("sayName", () => {
//     console.log("nayak")
// })

// event.emit("sayName");

event.on("checkpage", (sc, msg) => {
    console.log(`status code is ${sc} and the page ${msg} `)
});

event.emit("checkpage", 200, "ok");