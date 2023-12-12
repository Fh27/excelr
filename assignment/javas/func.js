    // const sumOfFirstTenNumbers=()=>{
    // let sum=0
    // let value=10
    // while(value>0){
    // sum+=value
    // value --}
    // return console.log(sum)}
    // sumOfFirstTenNumbers()

//     const arrowFuncWithDefaultParameter=(num1,num2, num3=90)=>{
// let result=num1+num2+num3
// console.log(result)}

// arrowFuncWithDefaultParameter(6,4,5)
// const addTen=(q)=>console.log(q+10)
// addTen(3)

//iife
// (function(){console.log('hello from iife hahahhaaha') })();
// var myFunc = function() { return "GeeksforGeeks"; }; 

// !function() { return "GeeksforGeeks"; }; 

// let myFunc=(function() { console.log("first") });
// myFunc()
// (function(name){console.log('hello from iife '+ name) })("furqan");
// (function(){console.log('hello from iife') })();

//generator functiom
function* gen(){
    return 3;
    yield "ram";
    yield "shyam";
}
let call=gen()
// for(const item of call)
// console.log(item)
console.log(call.next().value)
console.log(call.next().value)
console.log(call.next().value)

