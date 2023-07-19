const fs = require("fs");

// fs.writeFile("read.txt", "Asynchronuse", (err) => {
//     console.log("files is created");
//     console.log(err);
// });


// fs.appendFile("read.txt", "hiiiiiii", (err) => {
//     console.log("done")
// })

fs.readFile("read.txt","UTF-8", (err, data) => {
    console.log(data);
})