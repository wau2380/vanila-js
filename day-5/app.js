const hello = document.getElementById("hello");

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
function resize() {
  var intViewportWidth = window.innerWidth;
  if (intViewportWidth > 1000 && intViewportWidth < 1300) {
    document.body.style.backgroundColor = colors[0];
  } else if (intViewportWidth > 1300 && intViewportWidth < 1600) {
    document.body.style.backgroundColor = colors[1];
  } else if (intViewportWidth > 1600 && intViewportWidth < 1900) {
    document.body.style.backgroundColor = colors[2];
  } else {
    document.body.style.backgroundColor = colors[3];
  }
}
window.addEventListener("resize", resize);
