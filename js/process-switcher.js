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
