
const paymentGateway = require("./payment-gateway-promise");

function placeOrder(){
    console.log("1. Verify Card");
    const promise = paymentGateway.verifyCard();
    // then configures tasks to do after promise is completed(resolved/rejected)
    promise.then(
        // called when promise is resolved.
        ()=>{
            deductAmount();
        },
        // called when promise is rejected.
        // (error)=>{
        //     console.log(error);
        // }
    ).catch(err=>{
        console.log(err);
    })
}

function deductAmount(){
    console.log("2. Deduct Amount");
    console.log("Deducting amount");
}

placeOrder();