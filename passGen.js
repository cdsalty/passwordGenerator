const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const form = document.getElementById("passwordGeneratorForm");
const includeUppercaseElement = document.getElementById("includeUppercase");

characterAmountNumber.addEventListener("input", syncTogether);
characterAmountRange.addEventListener("input", syncTogether);
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

function syncTogether(e) {
  const inputValue = e.target.value;
  characterAmountNumber.value = inputValue;
  characterAmountRange.value = inputValue;
}

// 2. Setup the form so when user selects "generate a password," it returns a password instead of refreshing page
