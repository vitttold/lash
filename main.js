let questions = document.querySelectorAll(".questions-items");
let dots = document.querySelectorAll(".question-dot");
let answers = document.querySelectorAll(".answer");
let answersActive = document.querySelector(".question-dot-active");

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
    console.log(answersActive)

   }

 function questionClose() {
        answersActive.classList.remove("question-dot-active");
        answersActive.classList.add("question-dot");
        
        console.log("oga")

 }


    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', questionOpen);
    }
        answersActive.addEventListener('click', questionClose);





