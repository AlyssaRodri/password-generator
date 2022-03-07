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
  //created an array to hold the values
  passwordLength = []
  //prompt used so the user can input the values.
  passwordLength = prompt("How many characters are allowed?")
  console.log(passwordLength)
}



// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.


// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
  var finalResult = ""

  //created array to hold the variables that we will be using
  variablesToUse = []
  //added if statements to this function so that variable can be read by machine.
    if (askAboutUppercase === true){ //if Upper case characters are allowed
      //merge array into new array variablesToUse
      charactersToUse.concat(uppercaseChars)
   } //else nothing?

    if (askAboutLowercase === true){
      //merge array into new array variablesToUse
      variablesToUse.concat(lowercaseChars) // add to generate pw function. 
   } //else nothing? (Need else?)

    if (askAboutNumbers === true){
      //merge array into new array variablesToUse
      variablesToUse.concat(number) //add to generate pw function
   }
    if (askAboutSpecialChar === true){
      //merge array into new array variablesToUse
      variablesToUse.concat(specialChars)
    }

  // Code snippet from https://dev.to/code_mystery/random-password-generator-using-javascript-6a
  for(var i = 1; i >= passwordLength; i ++){
    var randomNumber = Math.floor(Math.random() * variablesToUse.length);
    password += variablesToUse.substring(randomNumber, randomNumber +1); 
  return finalResult = '';
 
}
}
 console.log(finalResult)
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

  askAboutCharacterCount();{
    //function set to convert string to integer. 


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 