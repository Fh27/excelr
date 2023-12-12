let str=[1,2,3,4,5]
console.log(str)
str.push(6,7)
console.log(str)
let l=str.length
console.log("lenght "+ l)
str.pop()
console.log(str)
str.shift()
console.log(str)
str.unshift(0)
console.log(str)
let sliced=str.slice(1,4)
console.log(sliced)
let spliced =str.splice(1, 2, 8, 9);
console.log(str)
let a="javascript is awesome"
let up=a.toUpperCase()
console.log(up)
let down=a.toLowerCase()
console.log(down)
let le=a.length
console.log(le)
let ind =a.indexOf("is")
let subs=a.substring(4,10)
console.log(subs)
let result = a.replace("awesome", "amazing");
console.log(result)
let arrr=a.split(" ")
console.log(arrr)
let lsub=arrr.length
console.log(lsub)