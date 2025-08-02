//IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// let a = ()=>{
//     return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(456)
//   },4000)
// })
// }
// (async () => {
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// })
// ()


//destructuring

// let arr=[3,5,47,8,9]
// // let [c,b]=arr
// // let [c,b,...rest]=arr
// let [c, ,...rest]=arr
// console.log(c,rest)

//spread 
let arr1 =[3,5,7]
let obj = {...arr1}
console.log(obj)

function sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(...arr1))

let data={
    name:"shikha",
    age:"20",
    id:"567"
};
// console.log({...data,name:"deepa"})
console.log({name:"deepa",...data}) //this will print data object without changing

//scope
//block scope
{
    let a=8;
    console.log(a)
}
// console.log(a)  //this shows error due to bock scope

//function scope
function ax(){
    let a =67;
    console.log(a)
}
ax()

//HOSTING

//following two lines will run successfully due to javascript hoisting
console.log(a)
greet()
function greet(){
    console.log("good morning")
}
var a = 9; // declaration hoisted to the top but initialization is not 

console.log(a)



//closure
function init(){
    var name ="mozilla";
    function displayName(){
        console.log (name);
    }
    name ="google"
    return displayName;
}
let c = init();
c();


//arrow function 
const x ={
    name: "shikha",
    role:"frontend developer",
    exp:3,
    show :function(){
        setTimeout(() =>{
            console.log(this.name + " is a " + this.role + " with " + this.exp + " years of experience.")
        },2000)
    }
}
x.show()
