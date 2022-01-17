let questions = document.querySelectorAll(".questions-item");
let dots = document.querySelectorAll(".question-dot");
let answers = document.querySelectorAll(".answer");


function questionOpen(e) {
    let answerNumber = e.currentTarget.classList[0];
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.add("answer-close");
        dots[i].classList.remove("question-dot-active");
        dots[i].classList.add("question-dot");

        answers[answerNumber].classList.remove("answer-close");
        answers[answerNumber].classList.add("answer-open");
        dots[answerNumber].classList.remove("question-dot");
        dots[answerNumber].classList.add("question-dot-active");
    }

    console.log()

}

function questionClose(e) {
    let answerNumber = e.currentTarget.classList[0];
    for (let i = 0; i < answers.length; i++) {
        if (dots[answerNumber].classList.contains('question-dot-active')) {
            dots[i].classList.remove("question-dot-active");
            dots[i].classList.add("question-dot");
            answers[answerNumber].classList.add("answer-close");
            answers[answerNumber].classList.remove("answer-open");
        }
    }

}


for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', questionOpen);
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', questionClose);
}





