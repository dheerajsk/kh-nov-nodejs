
const paymentGateway = require("./payment-gateway");

function placeOrder(){
    console.log("1. Verify Card");
    paymentGateway.verifyCard(deductAmount);
}

function deductAmount(){
    console.log("2. Deduct Amount");
    console.log("Deducting amount");
}

placeOrder();