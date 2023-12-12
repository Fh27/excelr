// Inheritance example
// class person {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	toString() {
// 		return (`Name of person: ${this.name}`);
// 	}
// }
// class student extends person {
// 	constructor(name, id) {
// 		super(name);
// 		this.id = id;
// 	}
// 	toString() {
// 		return (`${super.toString()},
// 		Student ID: ${this.id}`);
// 	}
// }
// let student1 = new student('Mukul', 22);
// console.log(student1.toString());


// Abstraction example
// function person(fname, lname) {
// 	let firstname = fname;
// 	let lastname = lname;

// 	let getDetails_noaccess = function () {
// 		return (`First name is: ${firstname} Last 
// 			name is: ${lastname}`);
// 	}

// 	this.getDetails_access = function () {
// 		return (`First name is: ${firstname}, Last 
// 			name is: ${lastname}`);
// 	}
// }
// let person1 = new person('Mukul', 'Latiyan');

// console.log(person1.getDetails_access());


//polymorph
class firstClass {
	add() {
		console.log("First Method")
	}
}
class secondClass extends firstClass {
	add() {
		console.log(30 + 40);
	}
}
class thirdClass extends secondClass {
	add() {
		console.log("Last Method")
	}
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add();
