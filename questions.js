const QUESTIONS = [
    {
        //Question 1
        question: 'Who did the Packers play in the first Super Bowl?',
        answers: [
            { text: 'Oakland'},
            { text: 'Patriots'},
            { text: 'Kanas City'},
            { text: 'Da Bears'}
        ],
        correctAnswer: 'Kanas City'
    },

    {
        //Question 2
        question: 'Who is the current Quarterback?',
        answer: [
            {text: 'Mason Crosby'},
            {text: 'Brett Favre'},
            {text: 'Aaron Rodgers'},
            {text: 'Mike Daniels',}
        ],
        correctAnswer: 'Aaron Rodgers'
    },
    {
        //Question 3
        question: 'How many championships have the Green Bay Packers won?',
        answer: [
            {text: '10'},
            {text: '6'},
            {text: '8',},
            {text: '13'}
        ],
        correctAnswer: '13'
    },
    {
        //Question 4
        question: 'What team did they beat in their last Super Bowl appearance?',
        answer: [
            {text: 'Pittsburgh'},
            {text: 'New England'},
            {text: 'Seattle'},
            {text: 'kanas City'}
        ],
        correctAnswer: 'Pittsburgh'
    },
    {
        //Question 5
        question: 'What year was Lambeau Field built?',
        answer: [
            {text: '1950'},
            {text: '1957'},
            {text: '1960'},
            {text: '2000'}
        ],
        correctAnswer: '1957'
    },
    {
        //Question 6
        question: 'Since what year have season tickets been sold out?',
        answer: [
            {text: '2010'},
            {text: '1998'},
            {text: '1989'},
            {text: '1960'}
        ],
        correctAnswer: '1960'
    },
    {
        //Question 7
        question: 'Who was the Packers first head coach?',
        answer: [
            {text: 'Bart Star'},
            {text: 'Curly Lambeau'},
            {text: 'matt Lefleur'},
            {text: 'Vince Lombardi'}
        ],
        correctAnswer: 'Curly Lambeau'
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
   
   