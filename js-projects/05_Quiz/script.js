document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestion = 0;
  let score = 0;

  startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden')
    // restartBtn.classList.add('hidden')
    nextBtn.classList.add('hidden')

    questionContainer.classList.remove('hidden')
    questionText.classList.remove('hidden')
    choicesList.classList.remove('hidden')

    // scoreDisplay.classList.add('hidden')
    // resultContainer.classList.add('hidden')

    renderQuestion();
  })

  function renderQuestion() {
    
    questionContainer.classList.remove('hidden')
    questionText.classList.remove('hidden')
    choicesList.classList.remove('hidden')

    const questDiv = document.createElement('div')

    questionText.textContent = questions[currentQuestion].question
    choicesList.innerHTML = "";
    questions[currentQuestion].choices.forEach(choice => {
    const li = document.createElement("li")
    li.textContent = choice
    console.log(typeof li.textContent);
    li.addEventListener("click", (e) => {
      
      if(choice === questions[currentQuestion].answer) {
        e.target.style.backgroundColor = "green";
      }
      else {
        e.target.style.backgroundColor = "red";
      }
      choicesList.querySelectorAll('li').forEach(li => li.style.pointerEvents = "none")
    })    
    
    li.addEventListener("click", () => selectAns(choice))
    choicesList.appendChild(li);
    })

    // questionContainer.appendChild(questDiv)

    console.log(questDiv);
  }

  function selectAns(choice) {
    const ans = questions[currentQuestion].answer
    if(choice === ans) {
        score++;
    }
    nextBtn.classList.remove('hidden')
  }

  nextBtn.onclick = () => {
     currentQuestion++;
    if(questions.length > currentQuestion){
       renderQuestion()
    }
    else {
      renderResult()
    }
  }

  function renderResult() {
    questionContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')

    scoreDisplay.textContent = `${score} out of ${questions.length}`
    console.log("visible");
    
  }

  restartBtn.onclick = () => {
    score = 0;
  currentQuestion = 0;
  nextBtn.classList.add("hidden"); // hide next button
  location.reload();
  }
  
});
