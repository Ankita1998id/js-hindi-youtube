const accountId = 144553  // never changed
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



// Example with var
// function exampleVar() {
//     if (true) {
//       var x = 10;
//       console.log(x); // Outputs 10
//    }
//     console.log(x); // Outputs 10
//   }
  
//   // Example with let
//   function exampleLet() {
//     if (true) {
//       let y = 20;
//       console.log(y); // Outputs 20
//     }
//     // console.log(y); // Uncommenting this line would result in a ReferenceError
//   }
  
//   exampleVar();
//   exampleLet();
//   In the exampleVar function, var x is function-scoped and can be accessed both inside and outside the if block. In the exampleLet function, let y is block-scoped, and trying to access it outside the if block would result in an error.
  
//   In modern JavaScript development, it's generally recommended to use let and const over var due to their more predictable scoping behavior and to avoid potential issues associated with hoisting.