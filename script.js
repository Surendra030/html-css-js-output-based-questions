import code_base_questions from "./output_based.js";

const questions = code_base_questions;

const next_btn = document.querySelector(".change_btn");
const copy_btn = document.querySelector(".copy_btn");
const show_ans_btn = document.querySelector(".show_ans_btn");

const question_no = document.querySelector("h4");
const code_snippet = document.querySelector("code");
const answer_text = document.querySelector(".answer");

let global_random_num;

function toggle_answer() {
    if (answer_text.style.display === "none" || answer_text.style.display === "") {

        answer_text.style.display = "inline";
        show_ans_btn.innerHTML = "Hide"
    } else{

        answer_text.style.display = "none";
        show_ans_btn.innerHTML = "Show"

    }
}


function copy_to_clipboard() {
    const textToCopy = code_snippet.innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            copy_btn.classList.remove("btn_background_color")
            copy_btn.classList.add("btn_sucess_color");
            setTimeout(() => {
                copy_btn.classList.add("btn_background_color")
                copy_btn.classList.remove("btn_sucess_color");
            }, 1000);
        })
        .catch(err => {
            copy_btn.style.backgroundColor = "red";
            setTimeout(() => {
                copy_btn.style.backgroundColor = "#3500e1";

            }, 1000);
        });
}

function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * questions.length);
    global_random_num = randomNum;
    return randomNum;
}

function loadQuestion() {
    const question_data = questions[getRandomNumber()];

    if (question_data) {

        question_no.innerHTML = "Question : ".concat(question_data.serial);
        question_no.innerHTML = question_no.innerHTML.concat(" - ", questions.length)
        code_snippet.innerText = question_data.question;

        answer_text.innerText = question_data.answer;


    } else {
        console.error('Invalid question data.');
        code_snippet.innerText = "No question Data.";
    }
}

function changeQuestion() {

    const question_data = questions[getRandomNumber()];

    question_no.innerHTML = `Question : ${question_data.serial}`;
    code_snippet.innerText = question_data.question;
    answer_text.innerText = question_data.answer;
    answer_text.style.display = "none";
    show_ans_btn.innerHTML = "Show";


}

loadQuestion();

copy_btn.addEventListener("click", copy_to_clipboard)
next_btn.addEventListener("click", changeQuestion);

show_ans_btn.addEventListener("click", toggle_answer);

answer_text.style.display = "none";