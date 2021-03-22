// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Click button


generateBtn.addEventListener("click", writePassword);



// Write password to the #password input

  function writePassword() {
    var passwordLength = prompt("Let's generate a new  password. Please select a character amount between 8-128!");
    if (passwordLength === null) {
      alert("That means No. Have a beautiful day!")
      return;
    }
    else if (!passwordLength) {
      alert("Please Select a Character Amount")
      return;
    }
    else {

      // If the user would like to select an amount rather then 8-128 character

      if (!isNaN(passwordLength)) {
        passwordLength = parseInt(passwordLength)
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Please Select A Valid Character Amount")
        }
        else {
          var specialCharacters = confirm("Would you like to have Special Characters?");
          var upperCharacters = confirm("Would you like to have Uppercase Characters");
          var lowerCharacters = confirm("Would you like to have Lowercase Characters");
          var numberCharacters = confirm("Would you like to have Numbers");
  
      // If the user would not select at least one option 

          if (!specialCharacters && !upperCharacters && !lowerCharacters && !numberCharacters) {
            alert("Please Click OK On At Least One Option!")
          }
          else {
            generatePassword(passwordLength, specialCharacters, numberCharacters, upperCharacters, lowerCharacters);
            
          }
          
        }

      } 
      
      else {
        alert("Please Type a Number Between 8 and 128")
        return;
      }
    }
  }
  
  // function for generating password 
  function generatePassword(passwordLength, specialCharacters, numberCharacters, upperCharacters, lowerCharacters) {
    var chosenPassword = "";
    var passwordText = document.querySelector("#password");
    var randomFunction = {};
    var count = 0;
  
    if (specialCharacters) {
      randomFunction[count] = getSpecial
      count++
    }
    if (numberCharacters) {
      randomFunction[count] = getNumbers
      count++
    }
    if (upperCharacters) {
      randomFunction[count] = getUpper
      count++
    }
    if (lowerCharacters) {
      randomFunction[count] = getLower
      count++
    }
  
    for (var i = 1; i <= passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * count);
      chosenPassword += randomFunction[randomNumber]();
    }
  
    passwordText.textContent = chosenPassword;
  }


// specialCharacters are here
  function getSpecial() {
    var special = '!@#$%^&*(){}[]+<>/,.?';
    return special[Math.floor(Math.random() * special.length)];
  }
  
// numberCharacters are here
    function getNumbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
  
// upperCharacters are here
  function getUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
// lowerCharacters  are here
  function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }