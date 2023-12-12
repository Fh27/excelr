let employee = {
	eid: "E102",
	ename: "furqan"
}

let newEmployee = {...employee}; // Shallow copy

console.log("---------After modification----------");
newEmployee.ename = "amaan";
console.log("Employee=> ", employee.ename);

console.log("New Employee=> ", newEmployee.ename);
// Name of the employee as well as 
// newEmployee is changed.


