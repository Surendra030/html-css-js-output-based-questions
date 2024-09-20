// import code_base_questions from "./output_based.js";

let questions =[]

const next_btn = document.querySelector(".change_btn");
const copy_btn = document.querySelector(".copy_btn");
const show_ans_btn = document.querySelector(".show_ans_btn");

const question_no = document.querySelector("h4");
const code_snippet = document.querySelector("code");

const answer_text = document.querySelector(".answer");
let true_flag = document.getElementById("true_flag");
let false_flag = document.getElementById("false_flag");
let global_random_num;
let user_flag_state = { true: false, false: false };  // To track toggle state for each question

async function fetchData() {
    try {
        const response = await fetch("https://html-css-js-practice-qs.netlify.app/.netlify/functions/api?source=data2");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        questions = await response.json();

        // Load the initial question
        loadQuestion();

        // Set up event listeners
        setUpEventListeners();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


// Function to toggle answer visibility
function toggle_answer() {
    if (answer_text.style.display === "none" || answer_text.style.display === "") {
        answer_text.style.display = "inline";
        show_ans_btn.innerHTML = "Hide";
    } else {
        answer_text.style.display = "none";
        show_ans_btn.innerHTML = "Show";
    }
}

function toggle_flag(flag_type) {
    if (global_random_num !== undefined) {
        const currentQuestion = questions[global_random_num];

        if (flag_type === "true") {
            // If true flag is clicked, toggle it
            if (!user_flag_state.true) {
                currentQuestion.flag.true += 1;
                // If false flag was active, reset it
                if (user_flag_state.false) {
                    currentQuestion.flag.false -= 1;
                    user_flag_state.false = false;
                }
            } else {
                currentQuestion.flag.true -= 1; // Undo the true flag
            }
            user_flag_state.true = !user_flag_state.true;

        } else if (flag_type === "false") {
            // If false flag is clicked, toggle it
            if (!user_flag_state.false) {
                currentQuestion.flag.false += 1;
                // If true flag was active, reset it
                if (user_flag_state.true) {
                    currentQuestion.flag.true -= 1;
                    user_flag_state.true = false;
                }
            } else {
                currentQuestion.flag.false -= 1; // Undo the false flag
            }
            user_flag_state.false = !user_flag_state.false;
        }

        // Update the DOM with the new flag values
        true_flag.innerHTML = `✅ : ${currentQuestion.flag.true}`;
        false_flag.innerHTML = `❌ : ${currentQuestion.flag.false}`;

        // Log the modified question.flag object to the console
        console.log("Updated flag data:", currentQuestion.flag);
    }
}

async function updateFlagData(question) {
    try {
        const response = await fetch("https://html-css-js-practice-qs.netlify.app/.netlify/functions/api?source=data2", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(question), // Send updated flag data
        
        
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log('Flag data updated successfully');
    } catch (error) {
        console.error('Error updating flag data:', error);
    }
}


// Function to change to a new random question
async function changeQuestion() {
    if (global_random_num !== undefined) {
        // Get the current question data
        const currentQuestion = questions[global_random_num];

        // Update the flag data on the server before changing question
        await updateFlagData(currentQuestion);
    }

    // Load a new question
    const question_data = questions[getRandomNumber()];

    question_no.innerHTML = `Question : ${question_data.serial} - ${questions.length}`;
    code_snippet.innerText = question_data.question;
    answer_text.innerText = question_data.answer;
    answer_text.style.display = "none";
    show_ans_btn.innerHTML = "Show";

    // Update flag values in DOM
    true_flag.innerHTML = `✅ : ${question_data.flag.true}`;
    false_flag.innerHTML = `❌ : ${question_data.flag.false}`;
}



function copy_to_clipboard() {
    const textToCopy = code_snippet.innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            copy_btn.classList.remove("btn_background_color");
            copy_btn.classList.add("btn_sucess_color");
            setTimeout(() => {
                copy_btn.classList.add("btn_background_color");
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

// Function to get a random question number
function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * questions.length);
    global_random_num = randomNum;
    user_flag_state = { true: false, false: false };  // Reset flag state for each new question
    return randomNum;
}

function loadQuestion() {
    if (questions.length === 0) {
        console.error('No questions available.');
        return;
    }

    const question_data = questions[getRandomNumber()];

    if (question_data) {
        question_no.innerHTML = `Question : ${question_data.serial} - ${questions.length}`;
        code_snippet.innerText = question_data.question;
        answer_text.innerText = question_data.answer;

        true_flag.innerHTML = `✅ : ${question_data.flag.true}`;
        false_flag.innerHTML = `❌ : ${question_data.flag.false}`;
    } else {
        console.error('Invalid question data.');
        code_snippet.innerText = "No question Data.";
    }
}




function setUpEventListeners() {
    // Add event listeners
    copy_btn.addEventListener("click", copy_to_clipboard);
    next_btn.addEventListener("click", changeQuestion);
    show_ans_btn.addEventListener("click", toggle_answer);

    // Add flag toggle functionality
    true_flag.addEventListener("click", () => toggle_flag("true"));
    false_flag.addEventListener("click", () => toggle_flag("false"));

}


document.addEventListener('DOMContentLoaded', fetchData)
