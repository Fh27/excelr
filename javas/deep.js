let employee1 = {
	eid: "E102",
	ename: "furqan"
}
console.log("=========Deep Copy========");
let newEmployee1 = JSON.parse(JSON.stringify(employee1.ename));

console.log("---------After modification---------");


newEmployee1.ename = "Amaan";
console.log("Employee=> ", employee1.ename);
console.log("New Employee=> ", newEmployee1);
