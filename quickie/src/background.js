function background(ctx, cnv) {
  ctx.canvas.height = window.innerHeight;
  ctx.canvas.width = window.innerWidth;

  let particleArray = [];
  const nbr = window.innerWidth / 6;
  var coeff = 1;
  if (window.innerWidth < 768) {
    coeff = 100;
  }

  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = "rgb(0,0,0)";
    }

    update() {
      if (this.x + this.size * 2 > cnv.width || this.x - this.size * 2 < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y + this.size * 2 > cnv.height || this.y - this.size * 2 < 0) {
        this.directionY = -this.directionY;
      }

      this.x += this.directionX / 4;
      this.y += this.directionY / 4;
      this.draw();
    }
  }

  function init() {
    particleArray = [];
    for (let i = 0; i < nbr; i++) {
      let size = 1;
      let x =
        Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2;
      let y =
        Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2;
      let directionX = (Math.random() - 0.5) * 2;
      let directionY = (Math.random() - 0.5) * 2;
      let color = "#dbaac0";
      particleArray.push(
        new Particle(x, y, directionX, directionY, size, color)
      );
    }
  }

  function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particleArray.length; a++) {
      for (let b = a; b < particleArray.length; b++) {
        let distance =
          (particleArray[a].x - particleArray[b].x) *
            (particleArray[a].x - particleArray[b].x) +
          (particleArray[a].y - particleArray[b].y) *
            (particleArray[a].y - particleArray[b].y);
        if (distance < coeff * (cnv.height / 7) * (cnv.width / 7)) {
          opacityValue = 1 - distance / 8000;
          ctx.strokeStyle = "rgb(0,0,0," + opacityValue + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particleArray[a].x, particleArray[a].y);
          ctx.lineTo(particleArray[b].x, particleArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
    connect();
  }

  window.addEventListener("resize", function () {
    cnv.height = window.innerHeight;
    cnv.width = window.innerWidth;
  });

  init();
  animate();
}

export default background;
