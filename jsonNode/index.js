const fs = require("fs");
const bioData = {
  name: "manisha",
  age: 24,
  channel: "nayak",
};

const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json', jsonData, (err) => {
    console.log("done")
})
fs.readFile("json1.json", "utf-8", (err, data) => {
  const objData = JSON.parse(data);
  console.log(objData);
  // console.log(data);
});
// console.log(jsonData)
