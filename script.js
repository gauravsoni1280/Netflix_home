// js
// Get the video element
var video = document.getElementById("video-preloader");
// Get the website content element
var content = document.getElementById("website-content");
// Add an event listener for the video's ended event
video.addEventListener("ended", function () {
    // Hide the video element
    video.style.display = "none";
    // Show the website content element
    content.style.display = "block";
});
//get the faq class through queryselector
let answers = document.querySelectorAll(".faq-blocks");

answers.forEach((event) => {
    const ans=event.querySelector('.faq-txt-area');
    const icr=event.querySelector('.icon');
  event.addEventListener("click", () => {
      ans.classList.toggle('visi');
      icr.classList.toggle('icr');
  });
});
