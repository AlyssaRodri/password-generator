// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowercase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;



var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

// Lower case characters added to reference
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Special characters added to reference.
var specialChars = ["!","?", "#", "$","&"]

// Numbers added to reference
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Chosen Characters empty array
var chosenChars = []

function askUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?"); //Provided by instructor
  if(allowUppercase) {
    chosenChars = chosenChars.concat(uppercaseChars)
  };
  console.log(allowUppercase)
}

function askLowercase(){
  allowLowercase = confirm("Are lower case characters allowed?"); 
  if(allowLowercase) {
    chosenChars = chosenChars.concat(lowercaseChars)
  };
  console.log(allowLowercase)
}

function askSpecialChars(){
  allowSpecials = confirm("Are special characters allowed?"); 
  if(allowSpecials) {
    chosenChars = chosenChars.concat(specialChars)
  };
  console.log(allowSpecials)
}

function askNumbers(){
  allowNumbers = confirm("Are numbers allowed?"); 
  if(allowNumbers) {
    chosenChars = chosenChars.concat(number)
  };
  console.log(allowNumbers)
}

function userCharCount(){
  passwordCharacterCount = parseInt(prompt("How long would you like your password to be? Please note that it must be between 8 and 128."))
  if( passwordCharacterCount <8 || passwordCharacterCount > 128){
    passwordCharacterCount = parseInt(prompt("Please pick a number between 8 and 128."))
  } 
  console.log(passwordCharacterCount)
}

function holdPrompts(){
  askUppercase();
  askLowercase();
  askNumbers();
  askSpecialChars();
  userCharCount();

}

function randomPassword() {
  holdPrompts();
  password = "";

  for (let index = 0; index < passwordCharacterCount; index++) {
    var randomSelector = Math.floor(Math.random()* (chosenChars.length))
    password += chosenChars[randomSelector];
  }

  return password;
}

//Add event listener to the generate button
generateBtn.addEventListener("click", writePassword)

function writePassword(){
  var password = randomPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password

}