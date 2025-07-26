//exercise -1
const num =Math.floor( Math.random()*100)+1;
let guess
let numberOfGuesses = 0;

while(true){
    guess = parseInt(prompt("enter your guess :"))
    numberOfGuesses ++

    if (guess === num){
        alert(`correct! you guessed the number in ${numberOfGuesses} attempts.\n your score is ${100-numberOfGuesses}`)
        break;

    }else if (guess < num){
        alert("you enter the small number!. try again")
    }else{
        alert("you enter the greater number!.try again")
    }

}

// let a = prompt("enter your guess number:")
// a = Number.parseInt(a)

// if(num==a){
//     console.log("congratulation your guess is correct")
// }
// else if(num>a){
//     let a = prompt("enter your guess number ,you guess the smaller number")
//      a = Number.parseInt(a)
//     console.log("try again")
// }else{
//     let a = prompt("enter your guess number,you guess the greater number")
//      a = Number.parseInt(a)
//     console.log("try again")
// }