const QUESTIONS = [
    {
        //Question 1
        question: 'Who did the Packers play in the first Super Bowl?',
            
            'choice1': 'Oakland',
            'choice2': 'Patriots',
            'choice3': 'Kanas City',
            'choice4': 'Da Bears',
    
        correctAnswer: 'Kanas City'
    },

    {
        //Question 2
        question: 'Who is the current Quarterback?',
    
        'choice1': 'Mason Crosby',
        'choice2': 'Brett Favre',
        'choice3': 'Aaron Rodgers',
        'choice4': 'Mike Daniels',
        
        correctAnswer: 'Aaron Rodgers'
    },
    {
        //Question 3
        question: 'How many championships have the Green Bay Packers won?',
        
            'choice1': '10',
            'choice2': '6',
            'choice3': '8',
            'choice4': '13',
    
        correctAnswer: '13'
    },
    {
        //Question 4
        question: 'What team did they beat in their last Super Bowl appearance?',
        
        'choice1': 'Pittsburgh',
        'choice2': 'New England',
        'choice3': 'Seattle',
        'choice4': 'kanas City',
        
        correctAnswer: 'Pittsburgh'
    },
    {
        //Question 5
        question: 'What year was Lambeau Field built?',
        
        'choice1': '1950',
        'choice2': '1957',
        'choice3': '1960',
        'choice4': '2000',
        
        correctAnswer: '1957'
    },
    {
        //Question 6
        question: 'Since what year have season tickets been sold out?',
        
        'choice1': '2010',
        'choice2': '1998',
        'choice3': '1989',
        'choice4': '1960',
        
        correctAnswer: '1960'
    },
    {
        //Question 7
        question: 'Who was the Packers first head coach?',
        
        'choice1': 'Bart Star',
        'choice2': 'Curly Lambeau',
        'choice3': 'matt Lefleur',
        'choice4': 'Vince Lombardi',
        
        correctAnswer: 'Curly Lambeau'
    }];
        //Start of js function for Quiz App-------------------------------------------------------------------------
    //Variables to update score and question number    
    let score = 0;
    let questionNumber = 0;

    function startQuiz() {
        $('.start').on('click', function(){
            event.preventDefault();
            updateQuestion();
            console.log('start quiz is working!');
            $('.headline').hide();
            
        
        })
        
        //this function will listen for a click on the start button
        //then it will take users to the first question
    }
    function updateQuestion() {
       const quizQuestions = `<section class='question'>
                ${questionNumber += 1}
                <form>
                <h2>${QUESTIONS[questionNumber].question}</h2>
                <label>
                <input type='radio' name='forRadio1'>${QUESTIONS[questionNumber].choice1}
                </label>
                <label>
                <input type='radio' name='forRadio1'>${QUESTIONS[questionNumber].choice2}
                </label>
                <label>
                <input type='radio' name='forRadio1'>${QUESTIONS[questionNumber].choice3}
                </label>
                <label>
                <input type='radio' name='forRadio1'>${QUESTIONS[questionNumber].choice4}
                </label>
                </form>
       </section>`
       $('.jsList').append(quizQuestions);
        console.log(quizQuestions);
        
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