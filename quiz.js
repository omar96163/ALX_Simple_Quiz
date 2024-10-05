function checkAnswer() {
    let correctAnswer = '4'
    let selectedRadioButton = document.querySelector('input[name="quiz"]:checked')
    let userAnswer = selectedRadioButton.value
    if (userAnswer==correctAnswer){
        let feedback = document.getElementById('feedback')
        feedback.textContent="Correct! Well done."
    }
    else {
        let feedback = document.getElementById('feedback')
        feedback.textContent="That's incorrect. Try again!"
    }
}
let button = document.getElementById('submit-answer')
button.addEventListener('click', checkAnswer)
