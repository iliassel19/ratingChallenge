const cardRatings = document.querySelector(".card__ratings");
const cardBtn = document.querySelectorAll(".card__btn");
const cardSubmit = document.querySelector(".card__submit");
const cardRated = document.querySelector(".card__rated");
const cardHidden = document.querySelector(".card__hidden");
const cardShowed = document.querySelector(".card__showed");

cardRatings.addEventListener("click", function (e) {
  // Guard Condtion : if it's not true, no code after it will be executed
  if (!e.target.classList.contains("card__btn")) return;

  // Remove checked class from all elements
  cardBtn.forEach((btn) => btn.classList.remove("checked"));

  // add checked class on clicked element
  e.target.classList.add("checked");
});

let curRating = 0;
cardSubmit.addEventListener("click", function () {
  cardBtn.forEach((btn, i) => {
    // Implement the rating choosen in html
    if (btn.classList.contains("checked")) {
      curRating = i;
      cardRated.textContent = `You selected ${curRating + 1} out of 5`;
    }
    btn.classList.remove("checked");
  });

  // Show the result of submition
  cardHidden.style.top = "0";
  cardShowed.style.transform = "translateY(200%)";
});
