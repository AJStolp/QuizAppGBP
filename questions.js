const QUESTIONS = [
    {
        //Question 1
        question: 'Who did the Packers play in the first Super Bowl?',
        answers: [
            { text: 'Oakland'},
            { text: 'Patriots'},
            { text: 'Kanas City'},
            { text: 'Da Bears'}
        ]
        correctAnswer: 'Kanas City'
    },

    {
        //Question 2
        question: 'Who is the current Quarterback?',
        answer: [
            {text: 'Mason Crosby', correct: false},
            {text: 'Brett Favre', correct: false},
            {text: 'Aaron Rodgers', correct: true},
            {text: 'Mike Daniels', correct: false}
        ]
    },
    {
        //Question 3
        question: 'How many championships have the Green Bay Packers won?',
        answer: [
            {text: '10', correct: false},
            {text: '6', correct: false},
            {text: '8', correct: false},
            {text: '13', correct: true}
        ]
    },
    {
        //Question 4
        question: 'What team did they beat in their last Super Bowl appearance?',
        answer: [
            {text: 'Pittsburgh', correct: true},
            {text: 'New England', correct: false,},
            {text: 'Seattle', correct: false},
            {text: 'kanas City', correct: false}
        ]
    },
    {
        //Question 5
        question: 'What year was Lambeau Field built?',
        answer: [
            {text: '1950', correct: false},
            {text: '1957', correct: true},
            {text: '1960', correct: false},
            {text: '2000', correct: false}
        ]
    },
    {
        //Question 6
        question: 'Since what year have season tickets been sold out?',
        answer: [
            {text: '2010', correct: false},
            {text: '1998', correct: false},
            {text: '1989', correct: false},
            {text: '1960', correct: true}
        ]
    },
    {
        //Question 7
        question: 'Who was the Packers first head coach?',
        answer: [
            {text: 'Bart Star', correct: false},
            {text: 'Curly Lambeau', correct: true},
            {text: 'matt Lefleur', correct: false},
            {text: 'Vince Lombardi', correct: false}
        ]
    }];
        //Start of js function for Quiz App-------------------------------------------------------------------------
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
   
   