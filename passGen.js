const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const form = document.getElementById("passwordGeneratorForm");
const passwordDisplay = document.getElementById("passwordDisplay");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");

const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90); // will get an array from 65 - 90 for char codes
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33, 47)
  .concat(arrayFromLowtoHigh(58, 64))
  .concat(arrayFromLowtoHigh(91, 96))
  .concat(arrayFromLowtoHigh(123, 126));

// Event Listeners
characterAmountNumber.addEventListener("input", syncTogether);
characterAmountRange.addEventListener("input", syncTogether);

passwordGeneratorForm.addEventListener("submit", e => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked; // returns true or false if the button is checked.
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  // Assign password to a 'generatePassword' function
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;
});

// FUNCTIONALITY
// https://www.petefreitag.com/cheatsheets/ascii-codes/ for the ASCII codes being used

function generatePassword(
  // parameters passing in (comment due to using prettier and the stying it populates)
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  // console.log(LOWERCASE_CHAR_CODES, UPPERCASE_CHAR_CODES, SYMBOL_CHAR_CODES);
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);

  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode)); // need to get random value from list of charCodes
  }
  return passwordCharacters.join(""); // return array into string
}

function arrayFromLowtoHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function syncTogether(e) {
  const inputValue = e.target.value;
  characterAmountNumber.value = inputValue;
  characterAmountRange.value = inputValue;
}
