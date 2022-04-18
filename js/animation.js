let html = document.getElementById("html");
let bootstrap = document.getElementById("bootstrap");
let css = document.getElementById("css");
let js = document.getElementById("js");

window.onscroll = function () {
  console.log(window.scrollY);
  if (this.scrollY >= 2000) {
    html.classList.add("animation");
    bootstrap.classList.add("animation");
    css.classList.add("animation");
    js.classList.add("animation");
  }
};
