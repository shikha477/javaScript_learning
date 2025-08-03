// const a = async(text)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(text)
//         },2000)
//     })
// }
// (
//     async() =>{
//         let text = await a("Hello")
//         console.log(text)
//         text =await a("World")
//         console.log(text)
//     }
// )()

//q-2
// function sum (a,b,c){
//     return a+b+c
// }
// let x=[4,3,2]
// console.log(sum(...x))

// //q-3
// const a = async(text,n=2)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(text)
//         },2000*n)
//     })
// }
// (
//     async() =>{
//         let text = await a("i am resolving after 1 second",1)
//         console.log(text)
//         text =await a("i am resolving after 4 second",4)
//         console.log(text)
//     }
// )()

// //q-4
// function simpleInterest(p,r,t){
//     return (p*r*t)/100;
// }

// console.log(simpleInterest(1000,5,2))

//exercise -7
//password generator
class password{
    constructor(){
        console.log("Welcome to Password Generator")
        this.pass=""
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "0123456789";
        let specialChars = "!@#$%^&*()_+";
        let char="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(len<3){
            console.log("Password length should be greater than 3")
        }
        else{
            let i=0
            while(i<len){
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                this.pass += specialChars[Math.floor(Math.random() * specialChars.length)];
                this.pass += char[Math.floor(Math.random() * char.length)];
                i+=3
            }
            this.pass = this.pass.slice(0, len);
            return this.pass;
        }

    }
}
let p = new password()
console.log(p.generatePassword(7))
