let html = document.getElementById("html");
let bootstrap = document.getElementById("bootstrap");
let css = document.getElementById("css");
let js = document.getElementById("js");
let up = document.getElementById("up");

window.onscroll = function () {
  console.log(window.scrollY);
  if (this.scrollY >= 2000) {
    html.classList.add("animation");
    bootstrap.classList.add("animation");
    css.classList.add("animation");
    js.classList.add("animation");
  }
  // Show up button
  this.scrollY >= 500 ? up.classList.add("show") : up.classList.remove("show");
};

// click to page up
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
