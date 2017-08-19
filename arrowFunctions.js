// Arrow functions, added in es6 acts as a syntax sugar on top of traditional functions

//1. Example arrow function
var myFirstArrowFunction = () => 7;

//Arrow functions by default will return whatever you place on the righthand side of the arrow

//2. Arrow function taking in two parameters
var secondArrowFunction = (x, y) => x + y;

//If you want to break the default return action, you can add curly braces

//3. Breaking default return with arrow function
var thirdArrowFunction = () => {
  console.log('I am not automatically returning a value')
}

//4. Returning a value using curling braces
var fourthArrowFunction = (num) => {
  num = 5;
}

//5. If you only have one parameter, you can omit the parentheses
var fifthArrowFunction = val => val;
