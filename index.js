document.getElementById("inc").onclick = function () {
  document.getElementById("myHeader").textContent =
    Number(document.getElementById("myHeader").textContent) + 1;
};

document.getElementById("dec").onclick = function () {
  document.getElementById("myHeader").textContent =
    Number(document.getElementById("myHeader").textContent) - 1;
};

document.getElementById("reset").onclick = function () {
  document.getElementById("myHeader").textContent = 0;
};
