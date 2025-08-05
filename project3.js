const question=[
    {
        question:"which is the largest animal in the world",
        answer:[
            {Text:"Spark", correct: false},
            {Text:"Blue Whale", correct: true},
            {Text:"Elephant", correct: false},
            {Text:"Giraffe", correct: false},
        ]
    },
    {
        question:"which is the smallest country in the world",
        answer:[
            {Text:"Vaticam city", correct: false},
            {Text:"Bhutan", correct: true},
            {Text:"Nepal", correct: false},
            {Text:"Sri lanka", correct: false},
        ]
    },
    {
        question:"which is the largest desert in the world",
        answer:[
            {Text:"Kalahari", correct: false},
            {Text:"Gobi", correct: false},
            {Text:"Sahara", correct: false},
            {Text:"Antarctica", correct: true},
        ]
    },
    {
        question:"which is the smallest continent in the world",
        answer:[
            {Text:"Asia", correct: false},
            {Text:"Australia", correct: true},
            {Text:"Arctic", correct: false},
            {Text:"Africa", correct: false},
        ]
    },
];
const questionElement= document.getElementById("questions")
const answerButton= document.getElementById("answer")
const nextbtn = document.getElementById("next-btn")

let currentQuestionIndex=0
let score=0

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showquestion();
}
function showquestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    
    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.Text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct
        
        
        }
        button.addEventListener("click", selectAnswer);

    });
}


function resetState(){
    nextbtn.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }

}
function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct==="true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
            
        }
        button.disabled=true;
    });
    nextbtn.style.display="block"

}
function showScore(){
    resetState();
    questionElement.innerHTML=`You Scoed ${score} out of ${question.length}!`;
    nextbtn.innerHTML="PLay again";
    nextbtn.style.display="block"
}
function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showquestion();
    }else{
        showScore();
    }

}
nextbtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextbutton();
    }else{
        startQuiz();
    }
})
startQuiz();