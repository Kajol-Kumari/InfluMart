const ratingValue = document.getElementById("rating-value");
const ratingInputs = document.querySelectorAll("input[name='rating']");

ratingInputs.forEach((input) => {
    input.addEventListener("change", () => {
        ratingValue.textContent = input.value;
    });
});
