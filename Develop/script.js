// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

function getRandomChar(array) {
  for (var i = 0; i < 1; i++) {
    var randomNumber = Math.floor(Math.random() * array.length);
    variablesToUse.push(array[randomNumber])
    console.log(variablesToUse)

  }
}
  // Upper Case Characters added to reference
  // var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // Lower case characters added to reference
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"

  // Special characters added to reference.
  var specialChars = "!?#$&"

  // Numbers added to reference
  var number = "123456789"


  // Provided by instructor

  // Asking for Upper case value
  function askAboutUppercase() {
    allowUppercase = confirm("Are upper case characters allowed? Press okay to confirm.");
  }

  // Asking for lower case permission.
  function askAboutLowercase() {
    allowLowerCase = confirm("Are lower case characters allowed? Press okay to confirm. ")
  }

  // Asking about for number permission.
  function askAboutNumbers() {
    allowNumbers = confirm("Are numbers allowed? Press okay to confirm. ")
  }

  // Asking for special characters permission.
  function askAboutSpecialChar() {
    allowSpecials = confirm(" Are special characters allowed? Press okay to confirm. ")
  }

  // Asking for character count.
  function askAboutCharacterCount() {
    //created an array to hold the values
    passwordLength = []
    //prompt used so the user can input the values.
    passwordLength = prompt("How many characters are allowed?")
    console.log(passwordLength)
  }



  // Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.


  // Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
  function generatePassword() {
    var finalResult = ""
    //created array to hold the variables that we will be using
    variablesToUse = []
    //added if statements to this function so that variable can be read by machine.
    if (allowUppercase === true) { //if Upper case characters are allowed
      //merge array into new array variablesToUse
      var chosenUppercase = uppercaseChars.split("")
      getRandomChar(chosenUppercase);
    }

    if (askAboutLowercase === true) {
      //merge array into new array variablesToUse
      var chosenLowercase = lowercaseChars.split("")
      getRandomChar(chosenLowercase)
    } 

    if (askAboutNumbers === true) {
      //merge array into new array variablesToUse
      var chosenNumbers = number.split("")
      getRandomChar(chosenNumbers)
    }
    if (askAboutSpecialChar === true) {
      //merge array into new array variablesToUse
      var chosenSpecialChar = specialChars.split("")
    }

    // Code snippet from https://dev.to/code_mystery/random-password-generator-using-javascript-6a
    for (var i = 1; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * variablesToUse.length);
      // password += variablesToUse.substring(randomNumber, randomNumber +1); 
      console.log(finalResult)
      return finalResult;
    }
  }
  // Write password to the #password input
  function writePassword() {


    // ask the questions first
    askAboutUppercase();


    // Ask about the second value
    askAboutLowercase();


    // Ask about the third value
    askAboutNumbers();
    // And the fourth value
    askAboutSpecialChar();
    // Ask final question. Note this one should be a prompt.

    askAboutCharacterCount();
    //function set to convert string to integer. 


    generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)