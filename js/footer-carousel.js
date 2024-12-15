const track = document.querySelector(".footer-carousel__track");
const images = Array.from(track.children);
const gap = 20;
const imageWidth = images[0].offsetWidth + gap;

images.forEach((img) => {
  const clone = img.cloneNode(true);
  track.appendChild(clone);
});

let position = 0;
let speed = 3;

function moveCarousel() {
  position -= speed;
  if (Math.abs(position) >= imageWidth) {
    position = 0;
    track.appendChild(track.firstElementChild);
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(moveCarousel);
}

images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    speed = 1.5;
  });

  img.addEventListener("mouseleave", () => {
    speed = 3;
  });
});

moveCarousel();
