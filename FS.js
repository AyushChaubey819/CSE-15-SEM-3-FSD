const fs = require("fs");

//Create
fs.writeFileSync("data.txt", "Hello students");

//Read
console.log(fs.readFileSync("data.txt").toString());

//Update
fs.appendFileSync("data.txt", "Hello students, welcome to nodejs");

//Read Updated Data
console.log(fs.readFileSync("data.txt", "utf8"));

//Delete
fs.unlinkSync("data.txt");

console.log("File deleted successfully");


