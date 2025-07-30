// let key = prompt("enter key you want to set")
// let value= prompt("enter value you want to see")

// localStorage.setItem(key,value)
// console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

// if(key=="red"||key=="blue"){
//     localStorage.removeItem(key)

// }
// if(key==0){
//     localStorage.clear()
// }


//practice question 

// let url = "https://www.colourlovers.com/api/colors?format=json"
// let response = fetch (url)
// response.then((v)=>{
//     return v.json()
// }).then((contests)=>{
//     console.log(contests)
//     for(item in contests){
//         console.log(contests.[item])
//     }
// })
// cardContainer.innerHTML = "allcards"







//*********************notes app***********************
let n = localStorage.getItem("note")
alert("your note is"+n)

let a = prompt ("enter your note")
if(a){
    localStorage.setItem("note",a)
}

let c = confirm ("do you want to delet your note?")
if(c){
    localStorage.removeItem("note")
    alert("note delect successfuly")
}
