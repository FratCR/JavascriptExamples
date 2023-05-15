// Writing into an HTML element, using innerHTML
// Writing into the HTML output using document.write()
// Writing into an alert box, using window.alert()
// Writing into the browser console, using console.log()

// let method it has a very limited usage capacity.
// I prefer var method because we can use function and unlimited usage limit

// CONST, VAR, LET:

/*
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
*/

/*
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}
*/

/*
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
*/

/*
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
*/

/*
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
*/

// if a comparison is made between words, only the first letter of which is uppercase alphabetically appears uppercase.

/*
let text1 = "20";
let text2 = "5";
let result = text1 < text2;
*/

//OPERATORS

/*
let text1 = "What a very ";
text1 += "nice day";

console.log(text1) // output: What a very nice day


let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;

console.log(x,y,z) // 10 55 Hello5

// &&	logical and
// ||	logical or
// !	logical not

// typeof	Returns the type of a variable
// instanceof	Returns true if an object is an instance of an object type
*/

/*
let x = 5;
let z = Math.pow(x,2); // square

console.log(z)
*/

/*
JavaScript:
let x = 16 + 4 + "Volvo";

Result:
20Volvo

JavaScript:
let x = "Volvo" + 16 + 4;

Result:
Volvo164*/

/*
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
*/

// FUNCTIONS

/*
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
*/

/*
function toCelsius(f) {
  return (5/9) * (f-32);
}

let value = toCelsius(77);

console.log(value) // 25


// Instead of using a variable to store the return value of a function:

var x = toCelsius(77);
var text1 = "The temperature is " + x + " Celsius";

console.log(text1) // The temperature is 25 Celsius

// You can use the function directly, as a variable value:

var text2 = "The temperature is " + toCelsius(77) + " Celsius";

console.log(text2) // The temperature is 25 Celsius
*/

/*
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
*/


// OBJECTS

/*
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
*/

/*
// You can access object properties in two ways:

objectName.propertyName
// or
objectName["propertyName"]
*/

/*
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

name1 = person.fullName(); // John Doe

// If you access a method without the () parentheses, it will return the function definition:

name2 = person.fullName; // function() { return this.firstName + " " + this.lastName; }

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
*/


// STRINGS

/*
Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash
*/

/*
let x = "John"; // string

//But strings can also be defined as objects with the keyword new:
let y = new String("John"); // object

// Comparing two JavaScript objects always returns false.
*/

/*
The replace() method does not change the string it is called on.
The replace() method returns a new string.
The replace() method replaces only the first match
If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
To replace case insensitive, use a regular expression with an /i flag (insensitive)
To replace all matches, use a regular expression with a /g flag (global match)
JavaScript introduced the string method replaceAll()
*/

/*
let text = "5";
text = text.padStart(4,"0");

console.log(text)
*/

/*
var text = "HELLO WORLD";
text = text.charAt(0) // 0 index char character

let text1 = "HELLO WORLD"; // they are same
let char = text1[0];

console.log(text)
console.log(text1)
*/

/*
let text = "HELLO WORLD";
let char = text.charCodeAt(0); // H to alternative number index

console.log(char)
*/

/*
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  console.log(myNumber)
}

let x =  2 / 0; // they are infinity to Javascript too
let y = -2 / 0; // they are infinity to Javascript too
*/

// Infinity and NaN(Not a Number) characters type is number

/*
let x = 0xFF;
console.log(x)
*/

// number method of toFixed(2) is perfect for working with money.

