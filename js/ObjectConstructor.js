//OBJECT CONSTRUCTOR
function student(id, name, role){
         this.id=id
         this.name=name
         this.role=role
}
var s1= new student(13, "vamshi", 'student')
var s2= new student(368, "vicky", 'employee')

console.log(s1.id, s1.name,s1.role);
console.log(s2.id, s2.name, s2.role);