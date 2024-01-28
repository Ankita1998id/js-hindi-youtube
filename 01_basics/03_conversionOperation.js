let score = "Hitesh"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "hitesh"

let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanisLoggedIn)
// console.log(booleanisLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof stringNumber)

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// Practice question from chatgpt
let str = "123";
let strInNumber = Number(str);
// console.log(strInNumber)
// console.log(typeof strInNumber)

let num = 456;
let numInString = String(num);
// console.log(numInString)
// console.log(typeof numInString)

// Convert the boolean value true to a number and assign it to the variable 'result'.
let bool = true;
let number = Number(bool);
// console.log(typeof number)

// Convert the number 0 to a boolean and assign it to the variable 'result'.
let numZero = 0;
// Your code here
let boolean = Boolean(numZero)
// console.log(boolean)

// let strFalse = "false";
// let result = strFalse.toLowerCase() === "false";
// console.log(typeof result)
// console.log(result)

let strFalse = "false";
// Your code here
let result = Boolean(strFalse)
// console.log(result)  

// Ji, zarur! Aapka code thoda theek hai, lekin ek chhota sa dhyan dena hoga. JavaScript mein, string "false" ko boolean mein convert karne par yeh true maana jayega kyunki koi bhi non-empty string ko truthy mana jata hai.

// Agar aap specifically chahte hain ki string "false" ko boolean false mein convert karein, toh aapko ek conditional check ka use karna hoga. Yahan sahi tareeka hai:

// javascript
// Copy code
// let strFalse = "false";
// let result = strFalse.toLowerCase() === "false";
// Is code mein:

// strFalse.toLowerCase(): Yeh string ko lowercase mein convert karega, taki yeh kaam kare chahe original string uppercase mein ho ya mixed case mein.

// === "false": Yeh check karega ki lowercased string "false" ke barabar hai ya nahi.

// Is tareeke se, result sirf tab true hoga jab strFalse string "false" hogi. Warna, yeh false hoga.

// Convert the array [1, 2, 3] to a string and assign it to the variable 'result'

// Your code is correct for converting the array [1, 2, 3] to a string. However, it's important to note that using String() directly on an array will result in a string representation of the array, which includes square brackets and commas.
// let arr = [1, 2, 3];
// // Your code here
// let stringInarr = String(arr)
// console.log(stringInarr) // 1,2,3
// After this code is executed, stringInarr will contain the string representation of the array:
// If you want the string without the square brackets and commas, and instead want the numbers concatenated, you might consider using the join() method:
let arr = [1, 2, 3];
let stringInarr = arr.join("");
// console.log(stringInarr) //123

// Convert the array [2, 4, 6] to a single number (sum of all elements) and assign it to the variable 'result'.
// using Number() directly on an array won't give you the sum of its elements. Instead, you can use the reduce() method to calculate the sum of all elements in the array. Here's the corrected code:

let numArray = [2, 4, 6];
let numa = numArray.reduce((sum, num) => sum + num, 0);
// console.log(numa)

// Explanation:

// numArray.reduce(...): The reduce method is used to iteratively sum up all elements in the array.

// (sum, num) => sum + num: This is a callback function that is executed for each element in the array. It adds the current element (num) to the running sum (sum).

// , 0: The reduce method takes an initial value for the sum, which is 0 in this case.

// Convert the number 42 to a string and concatenate it with the string " is the answer.".
// Assign the result to the variable 'result'.
let numAnswer = 42;
let numAnswerInString = String(numAnswer) + " is the answer.";
// console.log(numAnswerInString)

// let numAnswer = 42;
// let result = `${numAnswer} is the answer.`;


// Convert the string "5" to a number and add it to the number 10.
// Assign the result to the variable 'result'.
let strNum = "5";
let strnumber = Number(strNum) + 10;
// console.log(strnumber)

// Convert the boolean value false to a string and assign it to the variable 'result'.
let boolValue = false;
let boolstr = String(boolValue);
// console.log(typeof boolstr)

// Convert the string "True" (case-insensitive) to a boolean and assign it to the variable 'result'.
let myString = 'true';
let myBool = Boolean(myString.toLowerCase() === 'true'); // true
// console.log(myBool);

let numarray = [1, 2, 3];
let striarr = String(numarray.join(","))
// console.log(striarr)

// Convert the string "apple,orange,banana" to an array and assign it to the variable 'result'.
let fruitsString = "apple,orange,banana";
// Your code here
// let fruitstr = Array(fruitsString)
// console.log(fruitstr)

// Your code is close, but using Array() directly on a string won't split the string into an array based on a specific separator. Instead, you can use the split() method to achieve this. Here's the corrected code:
let fruitstr = fruitsString.split(",");
// console.log(fruitstr)

let arrString = "hello";
let arrstr = Array.from(arrString );
// Or, using split:
// let result = myString.split("");
// console.log(arrstr)

// Convert the truthy value "hello" to a boolean and assign it to the variable 'result'.
let truthyValue = "hello";
// Your code here
let trubool = Boolean(truthyValue)
console.log(trubool)


// Convert the current date (e.g., new Date()) to a string and assign it to the variable 'result'.

// new Date(): Creates a new Date object representing the current date and time.
// .toString(): Converts the Date object to a string.
let currentDate = new Date();
let currDate = currentDate.toString();
console.log(currDate);

// Convert the string "2022-01-01" to a Date object and assign it to the variable 'result'.
let dateString = "2022-01-01";
// Your code here
let dateobj =  new Date( dateString )
console.log(dateobj)

// Convert the null value to a string and assign it to the variable 'result'.
let nullValue = null;
let nullstr = String(nullValue)
console.log(nullstr)

// Convert the undefined value to a number and assign it to the variable 'result'.
let undefinedValue;
// Your code here
let Value = Number(undefinedValue)
console.log(Value)