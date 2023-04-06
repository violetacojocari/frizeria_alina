const header = document.querySelector(".navbar");
if (window.innerWidth < 768) {
  header.classList.add("sticky");
}

window.addEventListener("scroll", function () {
  if (window.innerWidth >= 768) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

function show() {
  document.getElementById("side-menu").classList.toggle("shows");
}
function hide() {
  document.getElementById("side-menu").classList.remove("shows");
}
