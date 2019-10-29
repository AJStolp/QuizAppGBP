const QUESTIONS = [
    {
        question: 'Who did the Packers play in the first Super Bowl?',
        answers: [
            { text: 'Oakland', correct: false },
            { text: 'Patriots', correct: false },
            { text: 'Kansas City', correct: true },
            { text: 'Da Bears', correct: false }
        ]
    },
    {
        question: 'Who is the current Quarterback?',
        answers: [
            { text: 'Mason Crosby', correct: false },
            { text: 'Brett Favre', correct: false },
            { text: 'Aaron Rodgers', correct: true },
            { text: 'Mike Daniels', correct: false }
        ]
    },
    {
        question: 'How many Championships have the GreenBay Packers won?',
        answers: [
            { text: 10, correct: false },
            { text: 6, correct: false },
            { text: 8, correct: false },
            { text: 13, correct: true }
        ]
    },
    {
        question: 'What team did they beat in their last Super Bowl appearance?',
        answers: [
            { text: 'Pittsburgh', correct: true },
            { text: 'New England', correct: false },
            { text: 'Seattle', correct: false },
            { text: 'Kansas City', correct: false }
        ]
    },
    {
        question: 'What year was Lambeau Field built?',
        answers: [
            { text: 1950, correct: false },
            { text: 1957, correct: true },
            { text: 1960, correct: false },
            { text: 2000, correct: false }
        ]
    },
    {
        question: 'Since what year have season tickets been sold out?',
        answers: [
            { text: 2010, correct: false },
            { text: 1998, correct: false },
            { text: 1989, correct: false },
            { text: 1960, correct: true }
        ]
    },
    {
        question: 'Who is the Packers first head coach?',
        answers: [
            { text: 'Bart Star', correct: false },
            { text: 'Curly Lambeau', correct: true },
            { text: 'Matt Lefleur', correct: false },
            { text: 'Vince Lombardi', correct: false }
        ]
    },
]


// const QUESTIONS = [
//     {
//         //Question 1
//         question: 'Who did the Packers play in the first Super Bowl?',
            
//             'choice1': 'Oakland',
//             'choice2': 'Patriots',
//             'choice3': 'Kansas City',
//             'choice4': 'Da Bears',
    
//         correctAnswer: 'Kansas City'
//     },

//     {
//         //Question 2
//         question: 'Who is the current Quarterback?',
    
//         'choice1': 'Mason Crosby',
//         'choice2': 'Brett Favre',
//         'choice3': 'Aaron Rodgers',
//         'choice4': 'Mike Daniels',
        
//         correctAnswer: 'Aaron Rodgers'
//     },
//     {
//         //Question 3
//         question: 'How many championships have the Green Bay Packers won?',
        
//             'choice1': '10',
//             'choice2': '6',
//             'choice3': '8',
//             'choice4': '13',
    
//         correctAnswer: '13'
//     },
//     {
//         //Question 4
//         question: 'What team did they beat in their last Super Bowl appearance?',
        
//         'choice1': 'Pittsburgh',
//         'choice2': 'New England',
//         'choice3': 'Seattle',
//         'choice4': 'Kanas City',
        
//         correctAnswer: 'Pittsburgh'
//     },
//     {
//         //Question 5
//         question: 'What year was Lambeau Field built?',
        
//         'choice1': '1950',
//         'choice2': '1957',
//         'choice3': '1960',
//         'choice4': '2000',
        
//         correctAnswer: '1957'
//     },
//     {
//         //Question 6
//         question: 'Since what year have season tickets been sold out?',
        
//         'choice1': '2010',
//         'choice2': '1998',
//         'choice3': '1989',
//         'choice4': '1960',
        
//         correctAnswer: '1960'
//     },
//     {
//         //Question 7
//         question: 'Who was the Packers first head coach?',
        
//         'choice1': 'Bart Star',
//         'choice2': 'Curly Lambeau',
//         'choice3': 'Matt Lefleur',
//         'choice4': 'Vince Lombardi',
        
//         correctAnswer: 'Curly Lambeau'
//     }];
//         //Start of js functions for Quiz App-------------------------------------------------------------------------
//     //Variables to update score and question number    
//     let score = 0;
//     let questionNumber = 0;
//     function startQuiz() {
        
//         $('.start').on('click', function(){
//             updateQuestion();
//             $('.headline').hide();
//             nextQuestion();
//             $(this).html('<button class="nxt">Next</button>');
//             //UpdateScore(); 
//             /*$(this).on('click', function(e){
//                 e.preventDefault;
//                 $('.formz').children().empty();
//                 console.log('working working working')*/;
//             });
//         }
//         //this function will listen for a click on the start button
//         //then it will take users to the first question
    
//     function updateQuestion() {
//        const quizQuestions = `<section class='question'>
//                 <form class='formz'>
//                 <h4>${questionNumber}<span>/7 - Question Number</span></h4>
//                 <h4>${score}<span>/49 - Score</span></h4>
//                 <h2>${QUESTIONS[questionNumber].question}</h2>
//                 <label>
//                 <input type='radio' id='r1' name='forRadio1' class='rdo' value='${QUESTIONS[questionNumber].choice1}'>${QUESTIONS[questionNumber].choice1}
//                 </label>
//                 <label>
//                 <input type='radio' id='r2' name='forRadio1' class='rdo' value='${QUESTIONS[questionNumber].choice2}'>${QUESTIONS[questionNumber].choice2}
//                 </label>
//                 <label>
//                 <input type='radio' id='r3' name='forRadio1' class='rdo' value='${QUESTIONS[questionNumber].choice3}'>${QUESTIONS[questionNumber].choice3}
//                 </label>
//                 <label>
//                 <input type='radio' id='r4' name='forRadio1' class='rdo' value='${QUESTIONS[questionNumber].choice4}'>${QUESTIONS[questionNumber].choice4}
//                 </label>
//                 <section class='tdScoresForDays'>
//                 <div id='incorrect'><div>
//                 </section>
//                 <button type='submit' id='td'>Touchdown?</button>
//                 </form>
//        </section>`
//        $('.jsList').on('click').append(quizQuestions);
//        $('.jsList').on('click', '#td', function(e){
//            e.preventDefault();
//            checkAnswer()
//            $(this).hide();
//        })
//     }      
//     function checkAnswer(){
//             let values = $('input[name="forRadio1"]:checked').val();
//             if(values == `${QUESTIONS[questionNumber -1].correctAnswer}`){
//                 $('#incorrect').text('The Crowd Go\'s Wild!');
//                 UpdateScore(); 
//             }else{
//                 $('#incorrect').text('Incomplete Pass!')
//         }
//     }


//     function nextQuestion() {
//        `${questionNumber ++}`;
        
//         //this function listens for a click on the next button if the answer is correct
//         //the user is taken to the next question
//     }

//     function UpdateScore(){
//         let tdScore = `${score += 7}`;
        
//         console.log(tdScore);
        
//         //this function will see if the answer is correct then update
//         //the score accordingly
//     }

//     function restartQuiz() {
//         //this function takes user to the beginning
//     }

//     $(startQuiz);