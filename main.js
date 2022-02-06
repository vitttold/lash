// Questions
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

// Slider Image
let sliderImages = document.querySelectorAll(".portfolio-slider-img");


function sliderImagesOpen(e) {
    if (e.currentTarget.classList.contains('portfolio-slider-img-active')) {
        e.currentTarget.classList.remove('portfolio-slider-img-active')
    } else {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].classList.remove('portfolio-slider-img-active')
        }
        e.currentTarget.classList.add('portfolio-slider-img-active')
    }
}

for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].addEventListener('click', sliderImagesOpen);
}


// map
// function initMap() {
//     var coordinates = {lat: 47.212325, lng: 38.933663},

//         map = new google.maps.Map(document.getElementById('map'), {
//             center: coordinates
//         });
// }


//nav-scroll

let nav = document.querySelector('.nav')
let navBackgroud = document.querySelector('.nav-backgroud')
let logo = document.querySelector('.logo')

function navScroll() {

    nav.classList.add('nav-active');
    navBackgroud.classList.add('nav-backgroud-active');
    navBackgroud.classList.add('nav-backgroud-active');
    logo.classList.add('logo-active');
    // document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    if (pageYOffset === 0) {
        nav.classList.remove('nav-active');
        navBackgroud.classList.remove('nav-backgroud-active')
        logo.classList.remove('logo-active')
    }
}

document.addEventListener('scroll', navScroll);


// services

let serviceDots = document.querySelectorAll(".promo-services-dot")
let halfCircle = document.querySelector(".half-circle")
let servicesText = document.querySelectorAll(".promo-services-down")
let servicesNumbers = document.querySelectorAll(".promo-services-numbers")


function services(e) {
    // e.currentTarget.classList.toggle("half-circle-2");
    halfCircle.classList.toggle("half-circle-2");
    for (let i = 0; i < serviceDots.length; i++) {
        serviceDots[i].classList.toggle("promo-services-dot-active");
    }
    for (let i = 0; i < servicesText.length; i++) {
        servicesText[i].classList.toggle("promo-services-down-active");
    }
    for (let i = 0; i < servicesNumbers.length; i++) {
        servicesNumbers[i].classList.toggle("promo-services-numbers-active");
    }

}

for (let i = 0; i < serviceDots.length; i++) {
    serviceDots[i].addEventListener('click', services);
}


// Price

// 2D 0.1 Толщина (мм) 5-9 Длина (мм) 2-3 Время процедуры (ч)

let priceItems = document.querySelectorAll(".price-item")
let weight = document.querySelector(".weight")
let long = document.querySelector(".long")
let time = document.querySelector(".time")
let cost = document.querySelector(".cost")
let priceText = document.querySelector(".price-item-block-middle")
let priceImage = document.querySelector(".price-item-img")


function priceSrart(e) {

    for (let i = 0; i < priceItems.length; i++) {
        priceItems[i].classList.remove("price-item-active");
        e.currentTarget.classList.add("price-item-active")

    }
    if (e.currentTarget.classList.contains("01")) {
        e.currentTarget.classList.add("price-item-active")
        weight.innerHTML = "0.1-0.2";
        long.innerHTML = "6-17";
        time.innerHTML = "до 2.5";
        cost.innerHTML = "60";
        priceText.innerHTML = "Классическое наращивание идеально для тех, кто первый раз решил нарастить ресницы. На одну свою ресничку крепится одна наращенная. Густота классики зависит от количества своих ресниц и выбранной толщины. Моделируется любой эффект и&nbsp;длина.";
        priceImage.src = "./src/img/price/classic.webp";
    }
    if (e.currentTarget.classList.contains("02")) {
        // 1.5D
        weight.innerHTML = "0.07-0.1";
        long.innerHTML = "6-17";
        time.innerHTML = "до 3";
        cost.innerHTML = "65";
        priceText.innerHTML = "Подходит для обладательниц густых ресниц, которым захотелось выглядеть чуть ярче, чем с классикой. Может использоваться любая длина и моделироваться любой эффект.";
        priceImage.src = "./src/img/price/1_5D.webp";
    }
    if (e.currentTarget.classList.contains("03")) {
        // 2D
        weight.innerHTML = "0.07-0.1";
        long.innerHTML = "6-17";
        time.innerHTML = "до 3";
        cost.innerHTML = "70";
        priceText.innerHTML = "Наиболее востребованный клиентами объем. На одну свою ресницу крепится пучок из двух ресниц. Длина и&nbsp;эффект может быть любым.";
        priceImage.src = "./src/img/price/2D.webp";

    }
    if (e.currentTarget.classList.contains("04")) {
        // 2.5D
        weight.innerHTML = "0.07-0.1";
        long.innerHTML = "6-17";
        time.innerHTML = "до 3";
        cost.innerHTML = "75";
        priceText.innerHTML = "На одну свою ресницу крепится пучок из двух-трех ресниц. Длина и&nbsp;эффект может быть любым.";
        priceImage.src = "./src/img/price/2_5D.webp";
    }
    if (e.currentTarget.classList.contains("05")) {
        // 3D
        weight.innerHTML = "0.07-0.1";
        long.innerHTML = "6-17";
        time.innerHTML = "до 3";
        cost.innerHTML = "80";
        priceText.innerHTML = "3D-объем позволит выглядеть ярко и выразительно при любой густоте своих ресниц.";
        priceImage.src = "./src/img/price/3D.webp";
    }
    if (e.currentTarget.classList.contains("06")) {
        // 4D
        weight.innerHTML = "0.07";
        long.innerHTML = "5-9";
        time.innerHTML = "до 3";
        cost.innerHTML = "90";
        priceText.innerHTML = "4D-объем позволит увеличить количество ресниц в&nbsp;4&nbsp;раза. Подходит для ярких смелых дам.";
        priceImage.src = "./src/img/price/4D.webp";
    }

}


for (let i = 0; i < priceItems.length; i++) {
    priceItems[i].addEventListener('click', priceSrart);
}