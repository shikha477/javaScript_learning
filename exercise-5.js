
function printToScreen(message) {
      const outputDiv = document.getElementById("output");
            const para = document.createElement("p");
            para.innerText = message;
            outputDiv.appendChild(para);
}

let main = async ()=>{
    let p1 =new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("installing hacking program...")
            printToScreen("installing hacking program...");
        },2000)
    })
    let p2 =new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hacking Rahul username...")
            printToScreen("Hacking Rahul username...");
        },3000)
    })
     let p3 =new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Username found Rahul12@...")
            printToScreen("Username found Rahul12@...");
        },4000)
    })
     let p4 =new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("connecting to facebook...")
            printToScreen("connecting to facebook...");
        },5000)
    })
    let pop1 =await p1;
    let pop2 =await p2;
    let pop3 =await p3;
    let pop4 =await p4;
    
}
main()