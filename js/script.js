const header = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

function show() {
  document.getElementById("side-menu").classList.toggle("shows");
}
