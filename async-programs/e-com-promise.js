
const paymentGateway = require("./payment-gateway-promise");

// function placeOrder(){
//     console.log("1. Verify Card");
//     const promise = paymentGateway.verifyCard();
//     // then configures tasks to do after promise is completed(resolved/rejected)
//     promise.then(
//         // called when promise is resolved.
//         ()=>{
//             deductAmount();
//         }
//     ).catch(err=>{
//         console.log(err);
//     })
// }

async function placeOrder(){
    console.log("1. Verify Card");
    // try-catch block is used for exception/error handling.
    try{
        await paymentGateway.verifyCard();
        deductAmount();
    }catch(err)
    {
        console.log(err);
    }
   
}

function deductAmount(){
    console.log("2. Deduct Amount");
    console.log("Deducting amount");
}

// placeOrder();


function tryExceptionHandling(){
    // try-catch block is used for exception/error handling.
        try{
            var x = 10;
            throw new Error("A manual error");
        }catch(err){
            console.log('We have got an error and working on to fix it.');
        }
}

tryExceptionHandling();