document.addEventListener("DOMContentLoaded", () => {

  // Create Content button
  const createButton = document.querySelector(".yellow-btn");

  createButton.addEventListener("click", () => {
    createButton.innerHTML = "Creating ✦";

    setTimeout(() => {
      createButton.innerHTML = 'Start Creating <b>✦</b>';
    }, 1200);
  });


  // Animate chart bars when page loads
  const bars = document.querySelectorAll(".bar");

  bars.forEach((bar, index) => {
    const originalHeight = bar.offsetHeight;

    bar.style.height = "0px";

    setTimeout(() => {
      bar.style.transition = "height 0.7s ease";
      bar.style.height = `${originalHeight}px`;
    }, 200 + index * 120);
  });


  // Send button interaction
  const sendButton = document.querySelector(".send-button");

  sendButton.addEventListener("click", () => {
    sendButton.style.transform = "scale(.9)";

    setTimeout(() => {
      sendButton.style.transform = "scale(1)";
    }, 150);

    alert("AI is generating new content ideas!");
  });


  // Calendar check animation
  const checks = document.querySelectorAll(".calendar-days div");

  checks.forEach((check, index) => {
    check.style.opacity = "0";

    setTimeout(() => {
      check.style.transition = "opacity .3s ease";
      check.style.opacity = "1";
    }, 500 + index * 150);
  });

});
