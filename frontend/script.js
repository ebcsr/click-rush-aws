let score = 0;
let timeLeft = 10;
let gameActive = true;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const button = document.getElementById("clickBtn");

button.onclick = () => {
  if (gameActive) {
    score++;
    scoreEl.textContent = score;
  }
};

const timer = setInterval(() => {
  timeLeft--;
  timeEl.textContent = timeLeft;

  if (timeLeft === 0) {
    gameActive = false;
    clearInterval(timer);
    button.disabled = true;
    submitScore();
  }
}, 1000);

function submitScore() {
  const name = prompt("Enter your name:");
  if (!name) return;

  fetch("YOUR_API_URL/submit-score", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, score })
  });
}
