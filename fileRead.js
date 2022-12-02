
const fs = require("fs");

console.log("Task 1");
fs.readFile("./learning.txt", afteFileRead);
console.log("Task 3");

function afteFileRead(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("File Data is here....");
        console.log(data.toString());
        
    }
}