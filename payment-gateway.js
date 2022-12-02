

module.exports.verifyCard = (cb)=>{
    setTimeout(()=>{
        console.log("Card verified");
        for(let i=0; i<1000; i++){
            cb();
        }
    }, 1000)
}