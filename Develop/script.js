// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

// Upper Case Characters added to reference
var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

// Lower case characters added to reference
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Special characters added to reference.
var specialChars = ["!", "?", "&", "$", "@", "~"];

// Numbers added to reference
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Provided by instructor

// Asking for Upper case value
function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed? Press okay to confirm.");
  console.log(allowUppercase);
}

// Asking for lower case permission.
function askAboutLowercase(){
  allowLowerCase = confirm("Are lower case characters allowed? Press okay to confirm. ")
}

// Asking about for number permission.
function askAboutNumbers(){
  allowNumbers = confirm("Are numbers allowed? Press okay to confirm. ")
}

// Asking for special characters permission.
function askAboutSpecialChar(){
  allowSpecials = confirm(" Are special characters allowed? Press okay to confirm. ")
}

// Asking for character count.
function askAboutCharacterCount(){
  // prompt used for multiple characters.
  let convertString = prompt("How many characters are allowed? Press okay to confirm. ")
  // converted string to numbers.
  passwordCharacterCount = parseInt(convertString)
}

// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.


// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
  var finalResult = ""
  // Create a For Loop
for(var i = 1; i = numberofCharacters; i ++){
  //paswword length = number of characters entered in prompt
  askAboutCharacterCount(numberofCharacters) 

}
  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

  // HINT: You may want to look into merging arrays together


  return finalResult;
}

// Write password to the #password input
function writePassword() {

  // ask the questions first
  askAboutUppercase();
  if (askAboutUppercase == true){ //if Upper case characters are allowed
    var uppercaseChars //add to generate pw function (how to? create array? )
  } //else nothing?

  // Ask about the second value
  askAboutLowercase();
  if (askAboutLowercase == true){
    var lowercaseChars // add to generate pw function. 
  } //else nothing? (Need else?)

// Ask about the third value
  askAboutNumbers();
  if (askAboutNumbers == true){
    var number //add to generate pw function
  }

// And the fourth value
  askAboutSpecialChar();
  if (askAboutSpecialChar == true){
    var specialChars //add to generate pw function
  }


// Ask final question. Note this one should be a prompt.
  askAboutCharacterCount();
  //function set to convert string to integer. 



  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);