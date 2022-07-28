let numberContainer = document.querySelector(".rating-state__number-container");
const ratingNumber = document.querySelector(".thankyou-state__result--number");
const submitBtn = document.querySelector(".rating-state__button");
const ratingState = document.querySelector(".rating-state");
const thankyouState = document.querySelector(".thankyou-state");

numberContainer.addEventListener("click", (e) => {
  const numberSelected = e.target.innerText;

  if (numberSelected > 0 || numberSelected < 5) {
    ratingNumber.innerText = numberSelected;
    submitBtn.addEventListener("click", () => {
      ratingState.style.display = "none";
      thankyouState.style.display = "flex";
    });
  }
});
