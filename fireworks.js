// fireworks.js
const canvas = document.createElement("canvas");
canvas.id = "fireworks-canvas";
canvas.style.position = "absolute";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
document.getElementById("fireworks").appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
  const fireworkArray = [];

  function createFirework() {
    for (let i = 0; i < 50; i++) {
      fireworkArray.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 6,
        speedY: (Math.random() - 0.5) * 6,
        color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`
      });
    }
  }

  function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworkArray.forEach((firework, index) => {
      firework.x += firework.speedX;
      firework.y += firework.speedY;
      firework.size -= 0.05;
      if (firework.size <= 0) {
        fireworkArray.splice(index, 1);
      } else {
        ctx.beginPath();
        ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
        ctx.fillStyle = firework.color;
        ctx.fill();
      }
    });
    requestAnimationFrame(animateFireworks);
  }

  createFirework();
  animateFireworks();
}
