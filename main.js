function startQuiz() {
    $('.jsStart').on('click', function(event){
        updateQuestion();
    })
    //this function will listen for a click on the start button
    //then it will take users to the first question
}
function updateQuestion(QUESTIONS) {
    let question = [];
    for(let i = 0; i < QUESTIONS.length; i++){
        
    }
    //this function updates the updates questions after the next button is clicked
}
function checkAnswer(){
    //this checks to see if answer is correct
}
function nextQuestion() {
    //this function listens for a click on the touchdown? button if the answer is correct
    //the user is taken to the next question
}
function UpdateScore(){
    //this function will see if the answer is correct then update
    //the score accordingly
}
function restartQuiz() {
    //this function takes user to the beginning
}
function callAllFunctions() {
     startQuiz();
     updateQuestion();
     checkAnswer();
     nextQuestion();
     restartQuiz();
}