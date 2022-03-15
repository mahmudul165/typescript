// https://www.typescriptlang.org/download

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// https://www.typescriptlang.org/docs/handbook/2/functions.html

// https://www.typescriptlang.org/docs/handbook/2/objects.html

// https://devhints.io/typescript

// https://devsonket.com/typescript

// https://www.typescriptlang.org/docs/handbook/enums.html

// 1.npm init -y
//2. npm install -g typescript or npm install --save-dev typescript
// 3.npx  tsc fileName.ts
//4. npx tsc fileName.ts --watch
//5. npx tsc --init
//6. node fileName.js

var a = "Hello world!";
// string, number, Array, null, undefined, bollean, never, unknown
// any
function getLowerCase(str) {
  return str.toLowerCase();
}
console.log(getLowerCase("Hello"));
console.log(getLowerCase("Hello world!"));
console.log(getLowerCase(""));
var b = 234;
function add(number1, number2) {
  if (number1 === void 0) {
    number1 = 23;
  }
  return number1 + number2;
}
var substract = function (number1, number2) {
  return number1 - number2;
};
substract(34, 23);
add(3, 4);
add(54, b);
// Array<T>
var arr2 = [123, 234, "mahmud"];
var arr = [123, 234, 456];
var arr1 = ["123", "234", "456"];
var id = 23;
var person1 = {
  name: "Tamim",
  age: 22,
  hobby: "Programming",
};
var person2 = {
  name: "Mezba",
  age: 25,
};
var personArr = [person1, person2];
// Enums
var Colors;
(function (Colors) {
  Colors["color1"] = "#ededed";
  Colors["color2"] = "#ededff";
  Colors["color3"] = "#ededee";
})(Colors || (Colors = {}));
console.log(Colors.color3);
// Generic ->
// function _concat<T>(a: T, b: T) {
//   return a + b;
// }
// _concat<number>(1, 3);
// _concat<string>("Muktaidr", "Tamim");
