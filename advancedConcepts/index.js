// Destructuring assignment
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
// all Output 
// > 10
// > 20
// > Array [30, 40, 50]

------------------------------------------------------------------------------------------------------------------------------------------------------------
// The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

------------------------------------------------------------------------------------------------------------------------------------------------------------
// Array destructuring
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

------------------------------------------------------------------------------------------------------------------------------------------------------------

const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue);  //undefined


------------------------------------------------------------------------------------------------------------------------------------------------------------

//Default values
//A variable can be assigned a default, in the case that the value unpacked from the array is undefined.

let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
 
------------------------------------------------------------------------------------------------------------------------------------------------------------
// Swapping variables
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
------------------------------------------------------------------------------------------------------------------------------------------------------------
// Parsing an array returned from a function

function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2



