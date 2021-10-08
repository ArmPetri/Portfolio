document.addEventListener("scroll", scrolling);

let scrollUpButton = document.querySelector("#scrollUpButton");

function scrolling() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

scrollUpButton.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}