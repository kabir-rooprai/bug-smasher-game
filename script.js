const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
let score = 0;
let currentMouse = null;
let interval = 2000;
let mouseInterval;

function createMouse() {
  if (currentMouse) {
    currentMouse.remove();
  }

  currentMouse = document.createElement("img");
  currentMouse.src = "mouse.png"; // Replace with your image URL
  currentMouse.className = "mouse";
  const mouseX = Math.random() * (gameContainer.offsetWidth - 50);
  const mouseY = Math.random() * (gameContainer.offsetHeight - 50);
  currentMouse.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

  currentMouse.addEventListener("click", () => {
      score++;
      updateScore();
      createMouse();
      decreaseInterval();
      clearInterval(mouseInterval); // Clear the current interval
      mouseInterval = setInterval(createMouse, interval); // Set up a new interval
  });

  gameContainer.appendChild(currentMouse);
}

function updateScore() {
  scoreElement.textContent = `Score: ${score}`;
}

function decreaseInterval() {
  interval = interval > 100 ? interval - 100 : interval;
}

function resetSpeed() {
    interval = 2000; // Reset interval to initial value
    clearInterval(mouseInterval);
    mouseInterval = setInterval(createMouse, interval);
}

function resetScore() {
    score = 0;
    updateScore();
}

function startGame() {
  mouseInterval = setInterval(createMouse, interval); // Set up the initial interval
}

startGame();
