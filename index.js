const homeScore = document.getElementById("home-score");
const addOneHomeScore = document.getElementById("add-one-home-score");
const addTwoHomeScore = document.getElementById("add-two-home-score");
const addThreeHomeScore = document.getElementById("add-three-home-score");

const guestScore = document.getElementById("guest-score");
const addOneGuestScore = document.getElementById("add-one-guest-score");
const addTwoGuestScore = document.getElementById("add-two-guest-score");
const addThreeGuestScore = document.getElementById("add-three-guest-score");

let homeS = 0;
let guestS = 0;

addOneHomeScore.addEventListener("click", function () {
  homeS += 1;
  homeScore.textContent = homeS;
});

addTwoHomeScore.addEventListener("click", function () {
  homeS += 2;
  homeScore.textContent = homeS;
});

addThreeHomeScore.addEventListener("click", function () {
  homeS += 3;
  homeScore.textContent = homeS;
});

addOneGuestScore.addEventListener("click", function () {
  guestS += 1;
  guestScore.textContent = guestS;
});

addTwoGuestScore.addEventListener("click", function () {
  guestS += 2;
  guestScore.textContent = guestS;
});

addThreeGuestScore.addEventListener("click", function () {
  guestS += 3;
  guestScore.textContent = guestS;
});
