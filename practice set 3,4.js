//q-1
//write a program to print the marks of a student in an oject using for loop
// let  marks = {
//     harry :80,
//     ram:78,
//     rahul:67,
//     ritu:72,
// }
// for (let i=0 ;i<Object.keys(marks).length;i++){
//     console.log ("the marks of " + Object.keys(marks)[i]+ "are" + marks[Object.keys(marks)[i]])
// }

// //q-2
// //same as above question by using for loop 
// for (let Key in marks){
//     console.log ("the marks of " + Key+ "are" + marks[Key])
// }

// //q-3
// //write a program to print "try again "until the user enter the correct number
// let cn = 78
// let i
// while(i!=cn){
//     i= prompt("enter the number")
//     console.log("try again")
// }
// console.log("congrulations! you enter the correct number")

// //q-4
// //write a function to find mean of 5 numbers
// const mean = ( a,b,c,d,e) => {
//     return (a+b+c+d+e)/5
// }
// console .log(mean(4,5,6,7,8))

// //chapter -4
// //practice set 


// let str ="shikha "
// console.log(str.toUpperCase());

// //what will the following prin tin javascript?
// //console.log("har/".length)
// //q-1
// let string="har\""
// console.log(string.length)

// //explore the include ,startwith & endwith function of a string
// //q-2
// const sentence=`the quick brown fox jumps over the lazy dog`;
// const word = 'fox2'
// console.log(sentence.includes(word))
// console.log (`the word "${word}" ${sentence.includes(word) ? 'is':'is not'} in the sentence`)

// //startsWith
// const sentences=`the quick brown fox jumps over the lazy dog`;
// const words = 'the'
// console.log(sentences.startsWith(words))
// console.log (`the word "${words}" ${sentences.startsWith(words) ? 'is':'is not'} in the sentence`)

// //endsWith
// const sen=`the quick brown fox jumps over the lazy dog`;
// const wor = 'the'
// console.log(sen.endsWith(wor))
// console.log (`the word "${wor}" ${sen.endsWith(wor) ? 'is':'is not'} in the sentence`)

// //q-3
// //write a program to convert a given string to lowerCase

// let num="SHIKHA"
// console.log(num.toLowerCase())

// //Q-4
// //extract the amount out  of this string "Please give rs1000"
// let srt2="please give Rs 1000"
// let amount = Number.parseInt(srt2.slice(15))
// console.log(amount)
// console.log(typeof amount)

// //Q-5
// //try to change 4th character of a given string were you able to do it ?
// let friend ="deepa"
// friend[3]='r'
// console.log(friend)//friend is not changed ,because string is immutable


// //quick question of chapter -5 
// let arr=[3,5,6,7,8,32,89,90]
// for(let num of arr){
//     console.log(num)
// }


//Exercise=2
let user = prompt("enter s,w,g")
let cpuI= Math.floor(Math.random()*3);
let cpu =["s","w","g"][cpuI]

const match =(cpu,user)=>{
    if (cpu === user){
        return "tie";
    }
    else if (cpu ==="s" && user ==="w"){
        return user
    }
    else if(cpu ==="w" && user==="s"){
        return cpu
    }
    else if(cpu ==="w" && user==="g"){
        return cpu
    }
    else if(cpu ==="g" && user==="w"){
        return user
    }
    else if(cpu ==="s" && user==="g"){
        return user
    }
    else if(cpu ==="g" && user==="s"){
        return cpu
    }
}
let result = match(cpu,user)
document.write(`computer choose : ${cpu} <br>  you choose :${user} <br> The winner is :${result}`)
