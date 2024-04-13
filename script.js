const questions = [
    {
        question: "Which ancient civilization built the famous pyramids at Giza?", 
        answers: [
            {text: "Ancient Greece", correct: false},
            {text: "Ancient Rome", correct: false},
            {text: "Ancient Egypt", correct: true},
            {text: "Ancient Greece", correct: false},

        ]
    },
    {
    question: "Who was the first president of the United States?", 
        answers: [
            {text: "Benjamin Franklin", correct: false},
            {text: "George Washington", correct: true},
            {text: "Thomas Jefferson", correct: false},
            {text: "John Adams", correct: false},

        ]
    },
    {
        question: "Who was the leader of the Soviet Union during World War II?", 
        answers: [
            {text: "Joseph Stalin", correct: true},
            {text: "Vladimir Lenin", correct: false},
            {text: "Nikita Khrushchev", correct: false},
            {text: "Mikhail Gorbachev", correct: false},

        ]
    },
    {
        question: "The Industrial Revolution began in which country?", 
        answers: [
            {text: "United States", correct: false},
            {text: "France", correct: false},
            {text: "Germany", correct: false},
            {text: "England", correct: true},

        ]
    },
    {
        question: "Who wrote 'The Communist Manifesto'?",
        answers: [
        {text: "Karl Marx", correct: true},
        {text: "Friedrich Engels", correct: false},
        {text: "Vladimir Lenin", correct: false},
        {text: "Leon Trotsky", correct: false},
]
    },
    {
        question: "Which ancient civilization is known for its creation of the Code of Hammurabi?",
        answers: [
        {text: "Ancient Greece", correct: false},
        {text: "Ancient Rome", correct: false},
        {text: "Ancient Egypt", correct: false},
        {text: "Mesopotamia", correct: true},
        ]
    },
    {
        question: "What year did Christopher Columbus first reach the Americas?",
        answers: [
        {text: "1492", correct: true},
        {text: "1505", correct: false},
        {text: "1519", correct: false},
        {text: "1527", correct: false},
        ]
    },
    {
        question: "Who was the longest-reigning British monarch as of 2022?",
        answers: [
        {text: "Queen Elizabeth I", correct: false},
        {text: "Queen Victoria", correct: true},
        {text: "King George III", correct: false},
        {text: "King Henry VIII", correct: false}
        ]
    },
    {
        question: "In what year did World War I begin?",
        answers: [
        {text: "1905", correct: false},
        {text: "1914", correct: true},
        {text: "1923", correct: false},
        {text: "1939", correct: false},
        ]
    },
    {
        question: "The Magna Carta, signed in 1215, was a significant document in which country?",
        answers: [
        {text: "England", correct: true},
        {text: "France", correct: false},
        {text: "Spain", correct: false},
        {text: "Italy", correct: false},
        ]
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        answers: [
        {text: "Margaret Thatcher", correct: true},
        {text: "Angela Merkel", correct: false},
        {text: "Theresa May", correct: false},
        {text: "Indira Gandhi", correct: false},
        ]
    },
    {
        question: "The Battle of Waterloo, where Napoleon Bonaparte was defeated, took place in which modern-day country?",
        answers: [
        {text: "France", correct: false},
        {text: "Belgium", correct: true},
        {text: "Germany", correct: false},
        {text: "Netherlands", correct: false},
        ]
    },
    {
        question: "Which American president signed the Emancipation Proclamation?",
        answers: [
        {text: "Abraham Lincoln", correct: true},
        {text: "Thomas Jefferson", correct: false},
        {text: "Andrew Jackson", correct: false},
        {text: "Ulysses S. Grant", correct: false},
        ]
    },
    {
        question: "Who was the last emperor of Russia?",
        answers: [
        {text: "Nicholas II", correct: true},
        {text: "Alexander III", correct: false},
        {text: "Peter the Great", correct: false},
        {text: "Ivan the Terrible", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length){
        showQuestion();
    
    } else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();