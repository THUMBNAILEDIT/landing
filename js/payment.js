const backendUrl = "https://thumbnailed-it-slack-bot.onrender.com";

document.addEventListener("DOMContentLoaded", function () {
  const lightButton = document.querySelector(
    ".pricing-plan__button.emp:not(.main)"
  );
  const basicButton = document.querySelector(".pricing-plan__button.emp.main");

  if (lightButton) {
    lightButton.addEventListener("click", function (e) {
      e.preventDefault();
      sendLandingPurchaseRequest(60);
    });
  }

  if (basicButton) {
    basicButton.addEventListener("click", function (e) {
      e.preventDefault();
      sendLandingPurchaseRequest(100);
    });
  }

  function sendLandingPurchaseRequest(amount) {
    const reference = `landing_${amount}_${Date.now()}`;
    sessionStorage.setItem("pending_reference", reference);

    fetch(backendUrl + "/api/create-invoice-landing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ total: amount, reference: reference }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.payment_url) {
          window.location.href = data.payment_url;
        } else {
          alert("Failed to start payment.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Payment failed. Try again later.");
      });
  }
});
