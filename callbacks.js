//Callbacks may seem complicated, but once you get your head around the concept they are pretty simple.
//A callback is simply a function that gets passed as a parameter to another function
//1. Very simple example of a Callback
function theCallback(num) {
  return num;
}

function callbackInvoker(cb) {
  var num = 4;
  return cb(num)
}
callbackInvoker(theCallback)

//Notice that we pass the function theCallback's definition, not the invocation. If we passed the invocation, we'd simply be passing the return value of theCallback
callbackInvoker(theCallback)

//Callbacks have access to values inside their parent functions scope
//2. Here is a callback that is using it's parents parameters to return a value
function parentFunction(num1, num2, cb) {
  return cb(num1, num2)
}
function childFunction(num1, num2) {
  return num1 + num2;
}
parentFunction(4, 2, childFunction)
//You use callbacks in JavaScript often. Many methods take callbacks and you may not even have recognized it.
//3. Examples of built in methods that take callbacks
var exampleArray = [1, 2, 3, 4]

exampleArray.forEach(function(num, i, arr) {
  return arr[i]++;
})

exampleArray.map(function(num, i, arr) {
  return arr[i]++;
})

//Callbacks are very common and serve many use cases. Callbacks help us to solve timing conflicts. When a function might take a while to complete, we can give it a callback function that it will invoke when it finishes running
//4. Here are some examples of real world use cases for callbacks

function getDataFromInternet() {
  console.log('I have finished getting data, here it is!')
}

setTimeout(getDataFromInternet, 1000)

//Callbacks can be used to do part of a whole. These parent functions are called higher order functions
//5. Example of a higher order function
function repeatMe(numTimes, callback) {
  for(var i = 0; i < numTimes; i++) {
    callback()
  }
}
repeatMe(4, madeupfunctiondefition)
