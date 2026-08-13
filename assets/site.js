// Wire each claim sentence to its evidence card, both directions.
document.querySelectorAll(".claim").forEach(function (claim) {
  var ev = document.getElementById(claim.dataset.ev);
  if (!ev) return;
  function on() { claim.classList.add("lit"); ev.classList.add("lit"); }
  function off() { claim.classList.remove("lit"); ev.classList.remove("lit"); }
  [claim, ev].forEach(function (el) {
    el.addEventListener("mouseenter", on);
    el.addEventListener("mouseleave", off);
    el.addEventListener("focus", on);
    el.addEventListener("blur", off);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
