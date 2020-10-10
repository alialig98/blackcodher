const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById 
('question-container')
const answerButtonsElement = document.getElementById ('answer-buttons')


let shuffleQuestions, currentQuestionsIndex

startButton.addEventListener ('click', startGame)


function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffleQuestions = question.sort
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {
    showQuestion (shuffleQuestions[currentQuestionsIndex])

}

function showQuestion(question) {
    questionElement.innertext = question.question
    question.answers.forEach(answer => {
    const button = document.createElement ('button')
    button.innerText = answer.text
    button.classList.add ('btn')
    if (answer.correct){button.dataset.correct-answer.correct}
    });
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
}
function resetState () {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild)
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
}

function selectAnswer() {

}

const questions = [
{
    question: 'what is Nines latest album called?',
    answers: [
        
        {text: 'Crabs in a bucket', correct: true},
        {text: 'crabs in barrell', correct: false}
    




    ]



}


]