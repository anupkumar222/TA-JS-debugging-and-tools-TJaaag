function fullName (firstName = "", lastName = "") {
   return firstName + " " + lastName;
}

let result = fullName(`anu`, `kumar`);
const expected = `anup kumar`;
if(result !== expected) {
    throw Error(`${result} is not equal to ${expected}`); 
}

// total amount
function toAmount(amount, taxRate) {
return amount + (amount * taxRate);
}
const expectedAmount = 118;
let resultant =  toAmount(1000, 18);
if(resultant !== expectedAmount) {
    throw Error(`${resultant} is not equal to ${expectedAmount}`);
}