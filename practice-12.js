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
function sum (a,b,c){
    return a+b+c
}
let x=[4,3,2]
console.log(sum(...x))

//q-3
const a = async(text,n=2)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text)
        },2000*n)
    })
}
(
    async() =>{
        let text = await a("i am resolving after 1 second",1)
        console.log(text)
        text =await a("i am resolving after 4 second",4)
        console.log(text)
    }
)()

//q-4
function simpleInterest(p,r,t){
    return (p*r*t)/100;
}
console.log(simpleInterest(1000,5,2))