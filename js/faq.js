document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", toggleAnswer);
  answer.addEventListener("click", toggleAnswer);

  function toggleAnswer() {
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.padding = "0 0";
    } else {
      answer.scrollHeight + "px";

      const buffer = 20;

      answer.style.maxHeight = answer.scrollHeight + buffer + "px";
      answer.style.padding = "10px 0";
    }
  }
});
