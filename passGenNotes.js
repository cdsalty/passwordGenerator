// Step 1: Connected the slider value to the value being entered and vice versa.
// characterAmountNumber.value = inputValue; // I put too much effort into this. simple: we need to take the value of
// caracterAmountNumber and set it equal to inputValue; Then do the same for characterAmountRange

// Step 1 Code: Connect the Number of Characters slider with the input entered and vice-versa (connect characterAmountRange to characterAmountNumber)
const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");

characterAmountNumber.addEventListener("input", syncTogether);
characterAmountRange.addEventListener("input", syncTogether);

function syncTogether(e) {
  const inputValue = e.target.value;
  characterAmountNumber.value = inputValue;
  characterAmountRange.value = inputValue;
}
//  _________________________________________________________________________________________________________________________________
// // 2. Setup the form so when user selects "generate a password," it returns a password instead of refreshing page
const form = document.getElementById("passwordGeneratorForm");
const includeUppercaseElement = document.getElementById("includeUppercase");

passwordGeneratorForm.addEventListener("submit", e => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked; // returns true or false if the button is checked.
  // const includeNumbers =
  // const includeSymbols =
  // get a password variable from a function
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
});
