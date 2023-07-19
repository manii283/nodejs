const fs = require("fs");

// fs.mkdir("manisha", (err) => {
//   console.log("folder created")
// })


// fs.writeFile("./manisha/bio.txt", "hiiiiiiiiii", (err) => {
//     console.log("created")
// })


// fs.readFile("./manisha/bio.txt", "utf-8", (err, data) => {
//     console.log(data);
// })


// fs.rename("./manisha/bio.txt", "./manisha/mybio.txt", (err) => {
//     console.log("rename done")
// })


// fs.unlink("./manisha/mybio.txt", (err) => {
//     console.log("delete")
// })


fs.rmdir("./manisha", (err) => {
    console.log("delete")
});
