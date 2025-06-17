// Handle all .btn-text buttons
document.querySelectorAll(".btn-text").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(".btn-text clicked – default prevented");
  });
});

// Handle the .btn--green button separately
const btnGreen = document.querySelector(".btn--green");
if (btnGreen) {
  btnGreen.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(".btn--green clicked – default prevented");
  });
}
