//Another way of storing data in JavaScript is by using arrays

//1. This is an example of an array
var myFirstArr = [0, 1, 2, 3, 4];

//Arrays are another kind of object, except the keys are indexes and arrays start counting at 0

//2. This is an example of referencing data inside an array using indexing
var index0 = myFirstArr[0]
var index2 = myFirstArr[2]

//3. You can store different types of data inside arrays
var mixedTypeArray = [1, 'string', {one: 1}, [1, 3, 4], true]

//4. creating an empty array
var emptyArray = [];

//5. adding values and changing values in an array
//Because the array was empty, this will add a value in index 0
emptyArray[0] = 'Added value'
//This will change the value in index 0
emptyArray[0] = 'Changing the value'
//We can also use array methods to add values or get values from an array
emptyArray.push('Adding a value')
var lastItem = emptyArray.pop()
emptyArray.unshift('Adding a value to the beginning of the array')
var firstItem = emptyArray.shift()

//For loops are a great way to cycle through all the values in an array and do something to it
//6. This is an example of looping through an array
var loopingArray = ['first', 2, '3rd', 4, 'last value'];
for(var i = 0; i < loopingArray.length; i++) {
  console.log('I am the value of i', i, 'And I am the value that is in the array', loopingArray[i])
}
//You can also loop through an array backwards
//7. This is an example of a for loop that goes backwards
for(var i = loopingArray.length - 1; i >= 0; i--) {
  console.log('I am the value of i', i, 'And I am the value that is in the array', loopingArray[i])
}

//Methods are functions that are built into arrays that you can use to do things
//8. Here are some common methods that you will use
var myMethodArray = [1, 2, 3, 4, 5];
//pop will alter the original array, and return you the last item in the array
myMethodArray.pop()
//shift will remove the first element in the array, and return it. It will alter the original array
myMethodArray.shift()
//splice can be used to remove and add items to an array. 2 indicates what index to start at and 1 indicates how many items to remove. Finally, 'John' will be added into the array
myMethodArray.splice(2, 0, 'John')
//slice can be used to get copys of values in an array
myMethodArray.slice()
