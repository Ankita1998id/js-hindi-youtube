const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

//chatgpt practice question

//Length and Concatenation:

// Declare two strings, "Hello" and "World". Find and print the length of each string. Then concatenate them and print the result.

let str1 = "Hello";
let str2 = "World";
let str1str2 = str1.concat('', str2)
console.log(str1str2.length)
console.log(str1str2)

// Indexing and Slicing:

// Declare a string, "Programming is Fun!". Print the first character, the last character, and a substring containing the word "is".
let str = "Programming is Fun!";

// Print the first character
console.log("First character:", str[0]);

// Print the last character
console.log("Last character:", str[str.length - 1]);

// Print a substring containing the word "is"
let substringIs = str.substring(str.indexOf("is"), str.indexOf("is") + 2);
console.log("Substring containing 'is':", substringIs);

// Declare a string, "OpenAI is revolutionizing AI research and development." Print the following:

// The second character in the string.
// A substring from the 4th to the 12th character (inclusive).
// The last word in the string.

let Value = "OpenAI is revolutionizing AI research and development.";

// Print the second character in the string
console.log('Second character:', Value[1]);

// Print a substring from the 4th to the 12th character (inclusive)
console.log('Substring from 4th to 12th character:', Value.substring(4, 13));

// Check if the string includes the word "development"
console.log('Includes "development":', Value.includes('development'));


// Uppercase and Lowercase:

// Declare a string, "OpenAI is Amazing!". Convert the entire string to uppercase and then to lowercase. Print both results.

let uplow = "OpenAI is Amazing!"
console.log(uplow.toLowerCase())
console.log(uplow.toUpperCase())

// Find and Replace:

// Declare a string, "Python programming is powerful and Pythonic.". Find the index of the first occurrence of "Python". Replace all occurrences of "Python" with "Java". Print the modified string.

let Replace = "Python programming is powerful and Pythonic."

console.log(Replace.includes('Python'));
console.log(Replace.replace('Python', 'Java'));


//Declare a string representing a date in the format "DD-MM-YYYY". Split the string using the hyphen as a delimiter and print the day, month, and year separately.

let date = "DD-MM-YYYY";
let parts = date.split('-');

// Print day, month, and year separately
console.log("Day:", parts[0]);
console.log("Month:", parts[1]);
console.log("Year:", parts[2]);


//Declare a string representing a time in the format "HH:MM:SS". Split the string using the colon (':') as a delimiter and print the hour, minute, and second separately.
let time = "HH:MM:SS";
let timeParts = time.split(':');

// Print hour, minute, and second separately
console.log("Hour:", timeParts[0]);
console.log("Minute:", timeParts[1]);
console.log("Second:", timeParts[2]);

let fullName = "John Michael Doe";
let nameParts = fullName.split(' ');

// Print first name, middle name (if present), and last name separately
console.log("First Name:", nameParts[0]);
console.log("Middle Name:", nameParts[1] || "N/A"); // Using "N/A" if middle name is not present
console.log("Last Name:", nameParts[2]);


//String Formatting:

// Declare two variables, name and age. Use them to create a string in the format "My name is [name] and I am [age] years old." Print the formatted string.

let nam = "John";
let age = 25;

let message = `My name is ${nam} and I am ${age} years old.`;
console.log(message);




// Strip Whitespace:

// Declare a string with leading and trailing whitespaces, " GPT-3.5 is advanced! ". Strip the whitespaces and print the cleaned str

let stringWithWhitespace = " GPT-3.5 is advanced! ";
let cleanedString = stringWithWhitespace.trim();

console.log("Original String:", stringWithWhitespace);
console.log("Cleaned String:", cleanedString);


// Count Substring:

// Declare a string, "abracadabra". Count and print the number of occurrences of the substring "abra" in the given string.
let inputString = "abracadabra";
let substring = "abra";

// Using a loop to count occurrences
let count = 0;
for (let i = 0; i <= inputString.length - substring.length; i++) {
    if (inputString.substring(i, i + substring.length) === substring) {
        count++;
    }
}

console.log(`Number of occurrences of "${substring}": ${count}`);

// Palindrome Check:
//Declare a string, "level". Check and print whether the given string is a palindrome or not (a palindrome reads the same backward as forward).
let palindromeString = "level";
let reversedString = palindromeString.split('').reverse().join('');

// Check if the original and reversed strings are the same
let isPalindrome = palindromeString === reversedString;

console.log(`Is "${palindromeString}" a palindrome? ${isPalindrome}`);


// String Comparison:

// Declare two strings, "apple" and "banana". Compare them lexicographically (alphabetically) and print whether they are equal, or which one comes first.

let string1 = "apple";
let string2 = "banana";

// Compare strings lexicographically
if (string1 === string2) {
    console.log("The strings are equal.");
} else if (string1 < string2) {
    console.log(`"${string1}" comes before "${string2}".`);
} else {
    console.log(`"${string2}" comes before "${string1}".`);
}
