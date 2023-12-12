function greet(){
    console.log("first")
}
function higherOrderFunc(){
    return greet()
}
higherOrderFunc()



// let arr1=[1,2,3,4,5,6]
// let res1=arr1.map((num)=>num*10)
// console.log(res1)
// console.log(arr1)
// console.log('----------')
// let arr2=[1,2,3,4,5,6]

// let res2=arr2.filter((num)=>num<4)
// console.log(res2)
// console.log(arr2)
// console.log('----------')
// let arr3=[1,2,3,4,5,6]

// let res3=arr3.reduce((value,sum)=>{
//     return value+sum
// },1)
// console.log(res3)
// console.log(arr3)
