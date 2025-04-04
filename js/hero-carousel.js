document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".hero-scrolling__wrapper");
  const image = document.querySelector(".scrolling-image__desktop");
  let speed = 150;
  let imageHeight = image.offsetHeight;
  let startTime = null;

  function updateImageHeight() {
    imageHeight = image.offsetHeight;
  }

  window.addEventListener("resize", updateImageHeight);

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = (timestamp - startTime) / 1000;
    const offset = (elapsed * speed) % imageHeight;
    wrapper.style.transform = `translateY(-${offset}px)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
