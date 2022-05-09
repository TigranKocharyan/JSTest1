
let x = 5;
var y = [1,2,3, 4];
const z = "constant";
 t = {
first: "Gago",
second: "Xadavik"
};

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

 let utils ={
     
     div(num1, num2){
         return num1 / num2; 
     },
     add:add3,
     sub:sub2,
     mul:mul,
    range(num1, num2){
        let arr = []
        if (num1 < num2)
        {
            for(let i = num1 +1; i< num2; i++) {
                arr.push(i);  
             }
        }
        if (num1 > num2)
        {
            for(let i = num1 -1; i> num2; i--) {
                arr.push(i);  
             }
        }
        else{return [num1]}
        return arr
    },

    curryFunc:CurriedGcd
       
 };
 console.log(range(3,9));
 

 export default utils
 
 
