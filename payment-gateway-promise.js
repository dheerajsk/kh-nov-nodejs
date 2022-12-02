

module.exports.verifyCard = ()=>{
    // resolve and reject are functions.
    // either resolves or rejects.
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Card verified");
            resolve();
            resolve();
        }, 1000);
    });
    return promise;
}