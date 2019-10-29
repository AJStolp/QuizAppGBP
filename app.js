const STATES = {
    START: 'start',
    QUESTION: 'question',
    CORRECT: 'correct',
    INCORRECT: 'incorrect',
    END: 'end'
}

//Declare Variables
let currentState, numCorrect, numIncorrect, currentQuestionIndex

// set start state
function loadStart() {
    // set state 
    currentState = STATES.START

    // reset counters
    numCorrect = 0
    numIncorrect = 0
    currentQuestionIndex = 0

    // set id on main element to state
    $('main').attr('id', currentState)

    // update inner HTML in <main>
    $('main').html(`
    <article class="panel">
        <section class="inner">
            <h1>FOOTBALL QUIZ</h1>
            <button class='nxt'>Let's Go!</button>
        </section>
    </article>`)
    console.log('first part is working')
}

function loadNextQuestion() {
    currentState = STATES.QUESTION
    $('main').attr('id', currentState)
    $('form').removeClass()
    $('button').html(`Submit`)

    let questionsHTML = createQuestionsHTML()

    // update inner HTML in <main>
    $('main').html(`
    <article class="panel">
        <section class="inner">
            <h1>${currentQuestionIndex + 1}. ${QUESTIONS[currentQuestionIndex].question}</h1>
            <form id="quiz">
                ${questionsHTML}
                <button type="submit">Submit</button>
                <div id='incorrect'></div>
            </form>
        </section>
        <footer>${currentQuestionIndex + 1} of 7</footer>
        console.log('second part is working')
    </article>`)

    updateCorrectIncorrect()
    console.log('second part is working');
}

function loadEnd(){
    currentState = STATE.END
    $('main').attr('id', currentState)
    $('button').html(`Re-take!`)

    let message = 
        numCorrect / QUESTIONS.length >= 0.7
            ? 'Nice Job'
            : 'Better Luck Next Year!'

    //update inner html
    $('main').html(`
    <article class="panel">
        <section class="inner">
            <p>YOU GOT<br /><span class="large">${numCorrect} / ${QUESTIONS.length}</span></p>
            <p>${message}</p>
            <button>RE-TAKE</button>
        </section>
    </article>`)

    //remove counter from incorrect and correct
    $('footer.footer').remove()
}

function createQuestionsHTML(){
    return QUESTIONS[currentQuestionIndex].answers
        .map((question, index) =>{
            return `
                <div class='answer'>
                    <input type='radio' name='answer' value='${index}' id='option${index}' class=''/>
                    <label for='option${index}'>${question.text}</label>
                </div>`
        })
        .join('\n')
}

//checkAnswersValid 
function checkAnswersValid(){
    let values = $('input[name="answer"]:checked').val();
            if(values == `${QUESTIONS[currentQuestionIndex].answers}`){
                $('#incorrect').text('The Crowd Go\'s Wild!')
            }else{
                $('#incorrect').text('Incomplete Pass!')
    }
}

//updateForm

//updateCorrectIncorrect

//loadButtonListener 

function loadButtonListener(){
    
    $('.nxt').on('click',function(e){
        e.preventDefault()
        console.log('working?!');
        loadNextQuestion()
        console.log('working?!');
    })
}

$(() => {
    //loadButtonListener()
    loadStart()
});
$(loadButtonListener())

