const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4];
//for of
const cars = ["BMW", "Volvo", "Mini"];
for (let x of cars) {
  console.log(x) ;
}
//map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  let geta=fruits.get("apples");
  console.log(geta)
//set
  const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letsize = letters.size;
console.log(letsize)
//class
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  } 
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
console.log(myCar1.name + " " + myCar2.name)  

  //promise
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );

  //... in arguments
  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  let x1 = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(x1) ;

  //arrays from
  const myArr = Array.from("ABCDEFG");
console.log(myArr);

//keys
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits2.keys();
for (let x of keys) {
console.log(x)  ;
}
//find
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}

//findindex
const numbers1 = [4, 9, 16, 25, 29];
let first1 = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//epilon
let x = Number.EPSILON;
console.log(x) ;

//is
let a1= isFinite(10/0);       // returns false
let a2=isFinite(10/1); 
let a3= isNaN("Hello");
//number methods
let a4= Number.isSafeInteger(10);    // returns true
let a5= Number.isSafeInteger(12345678901234567890); 
let a6= Number.isInteger(10);        // returns true
let a7= Number.isInteger(10.5);
let x2 = Number.MIN_SAFE_INTEGER;
console.log(x2)
//math method
let a8= Math.trunc(4.9);
let a9= Math.sign(-4); 
let a11= Math.cbrt(8);
let a12= Math.log2(2);
let a13= Math.log10(10); 
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
console.log(a6)
console.log(a7)
console.log(a8)
console.log(a9)
console.log(a11)
console.log(a12)
console.log(a13)


