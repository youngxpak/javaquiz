// Questions are based on general Javascript Knowledge

var questions = [
        {
            question: "Which of the following are NOT JavaScript data types?"
            choices = ["Groups", "String", "Boolean", "Object"]
            answer: "Groups"
        };
    
        {
            question: "True or False, Java is the abreviated term for JavaScript",
            choices = ["True", "False"],
            answer: "False"
        };
    
        {
            question: "What does NaN mean??",
            choices = ["National Attorney Network", "National Association of Nannies", "Not A Number", "National Action Ninjas" ];
            answer: "Not A Number"
        };
    
        {
            questiion: "Where is the right place to insert JavaScript?"
            choices = ["<head>", "<body>", "<html>", "<head> and <body>", "<head>, <body>, <html>"]
            answer: "<head> and <body>"
        };
    
        {
            question: "What is the proper way to add a comment in JavaScript?",
            choices = ["$Comment$", "<!-- Comment -->", "#Comment", "!Comment!"]
            answer: "<!-- Comment -->"
        };
];

//Debugging 
console.log(questions);

//VARIABLES

var quesQuiz = document.getElementById("Quiz");
var score = document.getElementById("score");
var timer = document.getElementById("buzzer")
var beingQuiz = document.getElementById("begin")
var score = 0;
var timeLeft = 75;
var questionNumber = 0;
var questionText = Questions[questionNumber].answer;
var a = document.getElementById("ansA");
var b = document.getElementById("ansB");
var c = document.getElementById("ansC");
var d = document.getElementById("ansD");

function nextQuestion(whatButtonClicked) {
    if (whatButtonClicked === questionText){
        console.log("Yay!");
        score++;
    }
        else {
        console.log("Boo! You are wrong!");
        }
    questionNumber++;
    newQuestion(questionNumber);

}

function clickAnswer(){
    

    a. addEventListener("click", function(){nextQuestion(a.innerText)})
    b. addEventListener("click", function(){nextQuestion(b.innerText)})
    c. addEventListener("click", function(){nextQuestion(c.innerText)})
    d. addEventListener("click", function(){nextQuestion(d.innerText)})

}
clickAnswer();

beginQuiz.addEventListener("click", function(){
    newQuestion(questionNumber);
});

function newQuestion(questionNumber){
    
}
