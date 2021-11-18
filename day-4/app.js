const superEventHandler = {
  title: document.getElementById("title"),
  colors: ["blue", "black", "gold", "green"],
  Click: function () {
    title.style.color = colors[0];
    title.innerText = "That was a right click";
  },
  mouse: function () {
    title.style.color = colors[1];
    title.innerText = "The mouse is here!";
  },
  mouseout: function () {
    title.style.color = colors[2];
    title.innerText = "The mouse is out!";
  },
  resize: function () {
    title.style.color = colors[3];
    title.innerText = "You just resized";
  },
};
title.addEventListener("click", superEventHandler.Click);
title.addEventListener("mouseenter", superEventHandler.mouse);
title.addEventListener("mouseleave", superEventHandler.mouseout);
window.addEventListener("resize", superEventHandler.resize);
