//chapter -5
//q-1
// Create an array of take input from the user to add number to this array

// let arr=[1,23,56,78,56]
// let a=prompt("enter a number")
// a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)

//q-2
//Keep adding number to the array in (1)until 0 is added to the array 

// let arr=[1,23,56,78,56]
// let a;
// do{
// a=prompt("enter a number")
// a=Number.parseInt(a)
// arr.push(a)}
// while(a != 0);
// console.log(arr)

//q-3
//filter for number divisible by 10 from a fiven array

// let arr=[10,56,90,55,80,10,45,23,20,30]
// let  newArr=arr.filter((val) =>{
//     return val%10==0;
// })
// console.log (newArr)

//q-4
//create an array of square of given numbers

// let arr=[1,2,3,4,5,6,7,8,9]
// let newArr=arr.map((val)=>{
//    return val*val
// })
// console.log(newArr)


//q-5
//use reduce to calculate factorial of a given number from an array of first n natural number(n being 
// the number whose factorial needs to be calculate )
// let arr=[1,2,3,4,5,6,7,8,9]
// let newArr = arr.reduce((val1,val2)=>{
//     return val1*val2
// })
// console.log(newArr)

//chapter -6
//q-1

// function checkdriveage(){
// let age  = prompt("enter your age")
// age =Number.parseInt(age)
// if (age>=18){
//     alert("you are eligible and you can drive")
// }else{
//     alert("you are not eligible and you cannot drive")

// }
// }
// checkdriveage();


// //q-2

// let runAgain=true;
// const canDrive = (age)=>{
//     return age >=18 ? true :false;
// }
// while(runAgain){
// let age  = prompt("enter your age")
// age =Number.parseInt(age)
// if (age<0){
//     console.error("please enter a valid age");
//     break;
// }
// if (canDrive(age)){
//     alert("you are eligible and you can drive")
// }else{
//     alert("you are not eligible and you cannot drive")

// }
// runAgain = confirm ("do you want to run again?")

// }

// //q-3
// //redirect the user to the google page if the number is graeter than 4
// let num =prompt("enter your number");
// num = Number.parseInt(num);
// if (num>4){
//     location .href="https://www.google.com";
// }

// //q-5
// //change the background color of th epage using prompt
// let color=prompt ("enter the page background color");
// document.body.style.backgroundColor=color;


//chapter=7 (practice )
//q=1
// let heading = document.querySelector(".container-fluid").firstElementChild;
// heading.style.color = "red";

// let p = new Promise((resolve,reject)=>{
//     console.log("request is pending");
//     setTimeout(()=>{
//         console.log("hey i am request and i am fullfield now");
//         reject(new Error("i am a error"))
//     },4000)
//     console.log("hello 2");

// })
// console.log(p);

// async function shikha (){
//      let p1= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("hey i am p1")
//             resolve(4)
//         },2000)
//      })

//      let p2= new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("hey i am p2")
//             resolve(6)
//         },5000)
//      })
 
//      console.log("welcome to my page")
//      console.log("pop1 is loading" )
// let pop1 = await p1
// console.log("pop1 is completed" )
// console.log("pop2 is loading" )
// let pop2 = await p2
// console.log("pop2 is completed" )
// }
// // console.log("welcome to my page")
// // let pop1 = await p1
// // let pop2 = await p2
// shikha()


//chapter -9

//q=2
// const loadScript = async (src)=>{
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script")
//         script.src = src
//         script.onload=()=>{
//             resolve(src+"done successfully")
//         }
//         document.head.append(script)
//     })
// }
// let a =loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js");
// a.then((value) => {
//     console.log(value);
// })

//q=1
// const main=async()=>{
//     console.log(new Date().getMilliseconds())
//      let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
//      console.log(a)
//      console.log(new Date().getMilliseconds())
// }
// main()

//q=3
// let p = ()=>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             reject (new Error("please this is not acceptable"))
//         },300)
//     })
// }
// let a= async ()=>{
//     try{
//         let c= awaitp()
//         console.log(c)
//     }
//     catch(err){
//         console.log("this error has been resolved")
//     }
// }
// a()

//q=4
