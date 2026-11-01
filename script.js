JavaScript
const questions = [
  {
    category: "Idols & Groups",
    question: "Which K-pop group debuted with the song 'No More Dream' in 2013?",
    options: ["EXO", "BTS", "SEVENTEEN", "GOT7"],
    answer: "BTS"
  },
  {
    category: "Music Videos",
    question: "Which girl group's MV reached 1 billion views first with 'DDU-DU DDU-DU'?",
    options: ["TWICE", "BLACKPINK", "Red Velvet", "ITZY"],
    answer: "BLACKPINK"
  },
  {
    category: "Leaders & Roles",
    question: "Who is the leader of TWICE?",
    options: ["Nayeon", "Jihyo", "Sana", "Mina"],
    answer: "Jihyo"
  }
];

let currentIndex = 0;
let score = 0;
let streak = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const categoryEl = document.getElementById("category-badge");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const current = questions[currentIndex];
  categoryEl.textContent = current.category;
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.classList.add("hidden");

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentIndex].answer;
  if (selected === correct) {
    score += 10;
    streak += 1;
    feedbackEl.textContent = "Correct! 🎉";
    feedbackEl.style.color = "green";
  } else {
    streak = 0;
    feedbackEl.textContent = `Wrong! Correct answer: ${correct}`;
    feedbackEl.style.color = "red";
  }
  scoreEl.textContent = score;
  streakEl.textContent = streak;
  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % questions.length;
  loadQuestion();
};

loadQuestion();