
// import afterFileRead module.
const fileModule = require("./afterFileRead");

function readFile(cb){
    setTimeout(()=>{
        console.log("Read file completed");
        cb();
    }, 3000);
}


readFile(fileModule.doSomethingAfterFileRead);