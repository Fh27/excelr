//function statement
function Add(){
    return  console.log("Hello ,Alice"); 
}
 Add();
//function expression
function Add1(){
    let name ="Hello, Bob"; 
    return name; 
}
let res2 = Add1();
console.log(res2); // 15
//arrow function
var add = ()=> {
  console.log("hello ,Charlie") 
}; 
add()
constructor
var dave = Function(console.log("Hello, Dave"));
dave ();
//gen func
function* gen(){
    yield "hello , Eve";
}
let call=gen()
console.log(call.next().value)
//iife
let myFunc=(function() { console.log("hello ,World") });
 myFunc()
//returned function
 function retfun(){
return console.log("hey, Frank")
 }
 retfun()
//obj func
 const person = {
    firstName: "Hello,",
    lastName: "Grace",
    id: 5566,
    fullName : function() {
      return this.firstName + " ," + this.lastName;
    }
  };
 let d=person.fullName();
 console.log(d)