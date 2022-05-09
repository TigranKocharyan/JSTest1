// declare 4 variables using 4 ways allowed 
//in JS containing values of 4 different data types
let x = 5;
var y = [1,2,3, 4];
const z = "constant";
 let  t = {
first: "Gago",
second: "Xadavik"
};

// declare 3 functions doing addition, subtraction
// and multiplication of 2 numbers using 3 ways allowed in JS
function add (num1, num2){
    return num1 + num2;
}

function sub (num1, num2){
    return num1 - num2
}

function mul (num1, num2){
    return num1 * num2
}

 const add2 = function(nu1, num2){
    return num1 + num2;
}
const sub2 = function(nu1, num2){
    return num1 - num2;
}
const mul2 = function(nu1, num2){
    return num1 * num2;
}
 const add3=(num1, num2)=>{return num1 + num2}
 const sub3=(num1, num2)=>{return num1 - num2}
 const mul3=(num1, num2)=>{return num1 * num2}

 const inc =(num)=>{return ++num}

 
   // add a method { curry } to the object { utils } that takes a function taking multiple argumets and returns a
   // function that can take the same amount of arguments one at a time
  const curry=(func)=>(num)=>{return func(num)}
  const CurriedGcd = (num1) => (num2) =>{
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while(num2) {
      var t = num2;
      num2 = num1 % num2;
      num1 = t;
    }
    return num1;
  }     

 let utils = {
     // declare an object { utils } with a method to divide 2 numbers
     div(num1, num2){
         return num1 / num2; 
     },
     // add the 3 functions created outside of the { utils }
     // object to the object without re-creating them
     add:add3,
     sub:sub2,
     mul:mul,
     // add a method to the object utils called { range }that takes 2 numbers and
     // creates an array containing all the numbers between those 2 in
     range (num1, num2){
         
        let arr = []
        if (num1 < num2)
        {
            for(let i = num1 +1; i< num2; i++) {
                arr.push(i);  
             }
             return arr
        }
        if (num1 > num2)
        {
            for(let i = num1 -1; i> num2; i--) {
                arr.push(i);  
             }
             return arr
        }
        return [num1]

        
        
        
    },
    curryFunc:curry,
// add 2 new methods { capitalize } and { uppercase } to the object { utils } that take
// a string and respectively capitalize and uppercase it
     uppercase(str){return str.toUpperCase()},
     capitalize(str){
         const lower = str.toLowerCase()
         return str.charAt(0).toUpperCase() + lower.slice(1)
     }
 };
 // partially apply number 2 to the basic math methods of the object utils using the { curry }
 // method of the same object and save them in 4 new variables 
 const add_two = (num)=>{return num + 2}
 const mul_two=(num)=>{return num * 2}
 const sub_two=(num)=>{return num - 2}
 const div_two=(num)=>{return num / 2}
   console.log(curry(CurriedGcd)()(12))
   console.log(curry(add_two)(5))
 // create an array of numbers 1 to  10
 // using the { range } method of the object { utils }
let arr = utils.range(0,11)
// apply the 4 partially applied functions
// to the newly created array and save the results to 4 new variables
 arr2 = arr.map(add_two)
 arr3 = arr.map(mul_two)
 arr4 = arr.map(sub_two)
 arr5 = arr.map(div_two)
 // log to the console the results of those 4 variables in
 console.log(arr2)
 console.log(arr3)
 console.log(arr4)
 console.log(arr5)

console.log(utils.capitalize('vgvg'))

//create a factory function { Person } that takes a name,
// a last name and an age and returns a new person when called 

function createPerson(firstName, lastName, age) {
    
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
      
    
  }
// const man =  Person("gago", "Poghosyan", 69)
  
const man = new createPerson("gago", "Poghosyan", 69)
console.log(man.age)
 // create another factory function called { Student } that 
 //inherits from { Person } with additional argument { University }
 // and returns a new student when applied in
 
 function createStudent  ( firstName, lastName, age, university){

     createPerson.call(this, firstName, lastName, age )

     this.university = university;

  }
  const stud =  new createStudent("Gag", "KO", 88, 'MIT' )
  console.log(stud.firstName)
  //convert the { Person } and
   //{ Student } factory functions to use the class syntax
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  class Student extends Person {
    constructor(firstName, lastName, age, university) {
      super(firstName, lastName, age);
      this.university = university;

    }
    // add a method to the { Student } class named { celebrate } 
//that returns the string `I've graduated from ${this.university} Yaay!!!`
celebrate(){
    return `I've graduated from ${this.university} Yaay!!!`
}
  }
  // Create 3 new Students from 
  //the class { Student } with different { university } fields 
const stud2 = new Student("Mrdo", "Vachyan",25, "Gyux")
console.log(stud2.celebrate())
const stud3 = new Student("Kosmos", "Zakaryan",22, "YSU")
const stud4 = new Student("Freddi", "Mercuri",25, "Cons")
// assign to 3 variables the { celebrate } method calls for the 3 Students
const cel2 = stud2.celebrate()
const cel3 = stud3.celebrate()
const cel4 = stud4.celebrate()
// log to console the 3 celebratory variables after applying them to the 
//{ uppercase } method of the { utils } object
console.log(utils.uppercase(cel2))
console.log(utils.uppercase(cel3))
console.log(utils.uppercase(cel4))