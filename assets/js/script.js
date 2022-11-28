// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordOptions = {
    passwordLength: 0,
    passwordCharacters: []
  }
  // ask user for password length
  var answer = prompt("Enter the number between 10 and 64");
  var passLength = Number(answer);
  // if passLength is numeber and is between 10 and 64
  if(passLength && (passLength >= 10 && passLength <= 64)) {
    // update passwordLength in passwordOptions
    passwordOptions.passwordLength = passLength;

    // ask user for lower cased characters
    var withLowerCase = confirm("Do you want password to contain lower case characters?");
    if(withLowerCase) {
      passwordOptions.passwordCharacters = [...passwordOptions.passwordCharacters,...lowerCasedCharacters];
    }

    // ask user of upper cased characters
    var withUpperCase = confirm("Do you want password to contain upper case characters?");
    if(withUpperCase) {
      passwordOptions.passwordCharacters = [...passwordOptions.passwordCharacters, ...upperCasedCharacters];
    }

    // ask user of numeric characters
    var withNumbers = confirm("Do you want password to contain numbers?");
    if(withNumbers) {
      passwordOptions.passwordCharacters = [...passwordOptions.passwordCharacters, ...numericCharacters];
    }

    // ask user for special characters
    var withSpecialCharacters = confirm("Do you want password to contain special characters?");
    if(withSpecialCharacters) {
      passwordOptions.passwordCharacters = [...passwordOptions.passwordCharacters, ...specialCharacters];
    }

    // check if at least one characters type was selected
    if(passwordOptions.passwordCharacters.length) {
      return passwordOptions;
    } else {
      alert("Please choose at least one character type");
    }

  } else {
    alert("Please enter a number between 10 and 64")
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  var selectedPasswordOptions = getPasswordOptions();
  
  if(selectedPasswordOptions) {  
    var userPassword = "";
    for(var i = 0; i < selectedPasswordOptions.passwordLength; i++) {
      var letter = getRandom(selectedPasswordOptions.passwordCharacters);
      userPassword += letter;
    }
  
  return userPassword;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);