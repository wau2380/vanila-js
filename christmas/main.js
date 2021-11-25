const dday = new Date("December 25, 2021, 0:00:00").getTime();

setInterval(function () {
  const today = new Date().getTime();
  const gap = dday - today;
  const day = String(Math.ceil(gap / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hour = String(
    Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const min = String(
    Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const sec = String(Math.ceil((gap % (1000 * 60)) / 1000)).padStart(2, "0");

  document.getElementById("count").innerHTML =
    "Time Until Chrismas " + day + "d " + hour + "h " + min + "m " + sec + "s";
}, 1000);
