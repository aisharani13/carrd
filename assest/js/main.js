const slides = document.querySelectorAll(".auto-slider .slide");
let index = 0;

const directions = [
  { in: "right", out: "left" },
  { in: "left",  out: "right" },
  { in: "bottom", out: "top" },
  { in: "top",   out: "bottom" }
];

let dir = 0;

function autoSwipe() {
  const current = slides[index];
  const nextIndex = (index + 1) % slides.length;
  const next = slides[nextIndex];

  // clean all classes
  current.classList.remove("active");
  current.classList.add(directions[dir].out);

  next.classList.remove("left","right","top","bottom");
  next.classList.add("active");

  index = nextIndex;
  dir = (dir + 1) % directions.length;
}

setInterval(autoSwipe, 3000);
