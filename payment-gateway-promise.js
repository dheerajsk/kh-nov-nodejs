

module.exports.verifyCard = ()=>{
    // resolve and reject are functions.
    // either resolves or rejects.
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log();
            // resolve();
            // resolve();
            reject("Card couldn't be verified");
            reject("Card couldn't be verified");
        }, 1000);
    });
    return promise;
}