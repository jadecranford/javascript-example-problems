//Objects allow us to store related information together in one place
//Objects reign supreme in JavaScript. Arrays are objects, functions are objects and strings and numbers have object prototypes

//1. How to make an object

var myFirstObj = {
  propertyKey: 'I am the property value',
  propertyKey2: 'I am the second property value seperated by a comma'
}

//2. How to access properties inside an object

var dotNotation = myFirstObj.propertyKey;
var bracketNotation = myFirstObj['propertyKey'];

//3. You can store primitive values, objects, arrays and functions as values inside an object

var mySecondObj = {
  arrayKey: [0, 1, 3],
  objectKey: {
    nestedKey: 'I am the nested key'
  },
  numberKey: 2,
  stringKey: 'I am the string key',
  booleanKey: true,
  methodKey: function() {
    return mySecondObj.numberKey;
    //You could also do return this.numberKey
  }
}

//4. How to change values inside an object

mySecondObj.arrayKey = 2;
mySecondObj['arrayKey'] = 5;

//5. Assigning new properties from outside an object

mySecondObj.newProperty = 'I am a new property'
mySecondObj['newProperty2'] = 'I am the second new property'

//6. Invoking a method inside a function (Method is a function stored inside an object)

mySecondObj.methodKey()

//7. Using a function to create an object

function objectMaker(value1, value2) {
  return {
    key1: value1,
    key2: value2
  }
}

var firstFunctionObject = objectMaker(1, 2)
var secondFunctionObject = objectMaker('String 1', 'String 2')
