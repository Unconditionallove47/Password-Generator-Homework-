function generatePassword(){
  //: your code goes here
  function randomGen() {
     const Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
     const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
     const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z']
     const specials = [' ', '!', '"', '#', '$', '&', '%', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~']
     const piggyBank = []
     var lengthOfPassword =Number(prompt("pick length 8-128"))
     if (length<8 || length>128) {
      alert("please only choose a number 8-128")
      generatePassword()
     } else {
            var askForNumbers = confirm('Would you like to add numbers?')
            if (askForNumbers == true ) {
              piggyBank.push(...Numbers)
            }

            var askForLowerCase = confirm('Would you like to add lowercase?')
            if (askForLowerCase == true ) {
              piggyBank.push(...lowerCase)
            }

            var askForUperCase = confirm('Would you like to add uppercase letters?')
            if (askForUperCase == true ) {
              piggyBank.push(...upperCase)
            }

            var askForSpecial = confirm("Would you like to add special characters added?")
            if (askForSpecial == true ) {
              piggyBank.push(...specials)
            }

          }
          
    math.floor(math.random()*piggyBank.length);

  return "password"

  }
}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
