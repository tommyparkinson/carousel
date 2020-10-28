const carousel = document.getElementById("carousel");

const left = document.getElementById("left");
const right = document.getElementById("right");

const width = document.querySelector(".carousel img").width;

left.addEventListener("click", () => {
  carousel.scrollLeft -= width;
});

right.addEventListener("click", () => {
  carousel.scrollLeft += width;
});
