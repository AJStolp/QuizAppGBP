const QUESTIONS = [
    {
        //Question 1
        question: 'Who did the Packers play in the first Super Bowl?',
        choices: [
            'Oakland',
            'Patriots',
            'Kanas City',
            'Da Bears'
        ],
        correctAnswer: 'Kanas City'
    },

    {
        //Question 2
        question: 'Who is the current Quarterback?',
        choices: [
            'Mason Crosby',
            'Brett Favre',
            'Aaron Rodgers',
            'Mike Daniels',
        ],
        correctAnswer: 'Aaron Rodgers'
    },
    {
        //Question 3
        question: 'How many championships have the Green Bay Packers won?',
        choices: [
            '10',
            '6',
            '8',
            '13'
        ],
        correctAnswer: '13'
    },
    {
        //Question 4
        question: 'What team did they beat in their last Super Bowl appearance?',
        choices: [
            'Pittsburgh',
            'New England',
            'Seattle',
            'kanas City'
        ],
        correctAnswer: 'Pittsburgh'
    },
    {
        //Question 5
        question: 'What year was Lambeau Field built?',
        choices: [
            '1950',
            '1957',
            '1960',
            '2000'
        ],
        correctAnswer: '1957'
    },
    {
        //Question 6
        question: 'Since what year have season tickets been sold out?',
        choices: [
            '2010',
            '1998',
            '1989',
            '1960'
        ],
        correctAnswer: '1960'
    },
    {
        //Question 7
        question: 'Who was the Packers first head coach?',
        choices: [
            'Bart Star',
            'Curly Lambeau',
            'matt Lefleur',
            'Vince Lombardi'
        ],
        correctAnswer: 'Curly Lambeau'
    }];
        //Start of js function for Quiz App-------------------------------------------------------------------------
    //Variables to update score and question number    
    let score = 0;
    let questionNumber = 0;

    function startQuiz() {
        $('.start').on('click', function(){
            updateQuestion();
            console.log('start quiz is working!');
            $('.headline').hide();
        
        })
        
        //this function will listen for a click on the start button
        //then it will take users to the first question
    }
    function updateQuestion() {
        QUESTIONS.forEach(question => {
            $('.jsList').append(`${question.question}  ${question.choices}`);
        })
    }      
    

    function checkAnswer(){
        //this checks to see if answer is correct
    }
    function nextQuestion() {
        //this function listens for a click on the next button if the answer is correct
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
    $(callAllFunctions());