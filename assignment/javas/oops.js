class Student{
    constructor(name,rollno,branch){
        this.name=name
        this.rollno=rollno
        this.branch=branch
    }
    studentDetails(){
        console.log(`the name of student is ${this.name} and rollno is ${this.rollno} from ${this.branch}`)
    }
}
let student=new Student('furqan',72,'ECE')
student.studentDetails()






































// class square {
//     constructor(length,breadth){
//         this.length=length
//         this.breadth=breadth
//     }
//     calculateArea(){
//         let area=this.length*this.breadth
//         return area
//     }
//     calculatePeri(){
//         let peri=2*(this.length+this.breadth)
//         return peri
//     }
// }
// let Square=new square(2,2)
// console.log(`this is ${Square.calculateArea()}`)