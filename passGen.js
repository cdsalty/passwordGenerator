console.log("sanity-check");

// Step 1: Connect slider with the input entered (set characterAmountRange to characterAmountNumber)
const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");

characterAmountNumber.addEventListener("input", syncTogether);
characterAmountRange.addEventListener("input", syncTogether);

function syncTogether(e) {
  const inputValue = e.target.value;
  characterAmountNumber.value = inputValue;
  characterAmountRange.value = inputValue;
}
