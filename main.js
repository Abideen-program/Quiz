const quizData = [
    {
        Question: 'What is the capital of Finland?',
        a: 'Olso',
        b: 'Helsinki',
        c: 'Espoo',
        d: 'Vantaa',
        correct: 'b'
    },  {
        Question: 'Which five colours make up the Olympic rings?',
        a: 'blue, yellow, white, green, red',
        b: 'pink, gold, black, green, red',
        c: 'purple, magenta, cyan, orange, lilac',
        d: 'blue, yellow, black, green, red',
        correct: 'd'
    },  {
        Question: 'Who painted Mona Lisa?',
        a: 'Olso the great',
        b: 'Pablo Picasso',
        c: 'Leonardo da Vinci',
        d: 'None of the above',
        correct: 'c'
    },  {
        Question: 'What\'s a baby rabbit called?',
        a: 'Kits or Kittens',
        b: 'Pup or puppies',
        c: 'cubs or cubies',
        d: 'liters',
        correct: 'a'
    },  {
        Question: 'Which rapper\'s real name is Dylan Kwabena Mills?',
        a: 'Dizzee Rascal',
        b: 'Tinie Tempah',
        c: 'Kana',
        d: 'Meek Mills',
        correct: 'a'
    }
];

const question = document.getElementById('question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');
const options = document.querySelectorAll('.answer');
const button = document.querySelector('button');
const quizFinish = document.querySelector('.quiz-container');

let currentNumber = 0;
let score = 0;


// To load the quiz
function loadQuiz(){
    deselect();
    let currentQuizData = quizData[currentNumber];
    question.innerText = currentQuizData.Question;
    optionA.innerText = currentQuizData.a;
    optionB.innerText = currentQuizData.b;
    optionC.innerText = currentQuizData.c;
    optionD.innerText = currentQuizData.d;
}

loadQuiz()

// to check if an option is selected
function getSelected(){
    let answer = undefined;
    options.forEach( option => {
        if(option.checked){
            answer = option.id;
        }
    })
    return answer;
}

// to deselect the options while loading next question

function deselect(){
    options.forEach( option => {
        return (option.checked = false);
    })
}


button.addEventListener('click', () => {
    // store the selected option id into variable
    let pickedOption = getSelected();
    // the variable is then passed to see if an option was selected
    if( pickedOption ){
        // if the option is correct;
        if( pickedOption === quizData[currentNumber].correct ){
            // it increases the score
            score++;
        }
    }
    currentNumber++;
    if( currentNumber < quizData.length){
        loadQuiz()
    } else{
        quizFinish.innerHTML = `
            <h2>You have anserwed ${score} out of ${quizData.length} questions correctly</h2>
            <h3 class="result">You get ${Math.floor((score / quizData.length) * 100)}% of the question right</h3>
            <button onclick="location.reload()">Reload</button>
        `  
    }
})