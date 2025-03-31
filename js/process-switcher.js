document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".scrolling-wrapper");
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

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".scrolling-wrapper-horizontal");
  const image = document.querySelector(".scrolling-image__reviews");
  let speed = 150;
  let imageWidth = image.offsetWidth;
  let startTime = null;

  function updateImageWidth() {
    imageWidth = image.offsetWidth;
  }

  window.addEventListener("resize", updateImageWidth);

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = (timestamp - startTime) / 1000;
    const offset = (elapsed * speed) % imageWidth;
    wrapper.style.transform = `translateX(-${offset}px)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});

document.addEventListener("DOMContentLoaded", () => {
  const stageBoxes = document.querySelectorAll(".stage-box");
  const stageImage = document.getElementById("stage-image");
  const stageImages = {
    1: "./images/process/drawing1.png",
    2: "./images/process/drawing2.png",
    3: "./images/process/drawing3.png",
  };
  stageBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      stageBoxes.forEach((b) => b.classList.remove("active"));
      box.classList.add("active");
      const stageNumber = box.getAttribute("data-stage");
      stageImage.src =
        stageImages[stageNumber] || "./images/process/drawing1.png";
      stageImage.alt = `Stage ${stageNumber}`;
    });
  });
});
