const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

class Ball {
  constructor() {
    this.x = 300;
    this.y = 300;
    this.xSpeed = Math.random() * 10 - 5;
    this.ySpeed = Math.random() * 10 - 5;
    this.color = `rgba(${random(255)}, ${random(255)}, ${random(255)}, 0.7)`;
  }
  draw() {
    ctx.fillStyle = this.color;
    circle(this.x, this.y, 8, true);
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  checkCollision() {
    if (this.x < 0 || this.x > width) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed = -this.ySpeed;
    }
  }
}

function random(num) {
  return Math.floor(Math.random() * num);
}

const circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

let balls = [];
for (let i = 0; i < 250; i++) {
  balls[i] = new Ball();
}

setInterval(() => {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].move();
    balls[i].checkCollision();
  }

  ctx.strokeRect(0, 0, width, height);
}, 30);
