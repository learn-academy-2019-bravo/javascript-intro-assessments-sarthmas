// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.

var qOne = mantra.charAt(0);

console.log(qOne);

// 2. Write the code that determines if there is a 'x' in mantra.

var qTwo = mantra.includes("x");

console.log(qTwo);

// 3. Write the code that determines if there is a 'v' in mantra.

var qThree = mantra.includes("v");

console.log(qThree);

// Stretch: Write the code that returns the position of 'v' in mantra.

var qFour = mantra.indexOf("v");

console.log(qFour);

// Consider the following statement:

var codingIsEasy = true
var imBored = true

if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// 4. Update the codingIsEasy and imBored
//variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost = false
var imFrustrated = false

if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}

// 5. Update the imLost and imFrustated variables above the statement
//to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question.
//Write the code that logs each letter of mantra using a for loop.

var mantra = "Be the dev";

var newMantra = mantra.split ("");

for (let i = 0; i < newMantra.length; i++) {

  console.log (newMantra[i]);
}

// Stretch: Using a while loop.
// Super Stretch: Using forEach().
// Consider the following variable:



// 7. Write a function that takes a string like message
//as an argument and returns the string without vowels.

var message = "thisisateststring"
var message = "thisisateststring"
const vowels = ["a","e","i","o","u"]

removeVowels = (string) => {
    var arr1 = []
    var split1 = string.split("")
    for (let i=0; i<split1.length; i++){
        if (!vowels.includes(split1[i])){
          arr1.push(split1[i])
        }
      }
      return finalArr = arr1.join("")
    }
    console.log(removeVowels(message));

/* Stretch: Update your function to throw an exception if
the argument is not a string. */

/* Super Duper Stretch: Update your function to throw a
TypeError if the argument is not a string. */

// Consider the following variable:

// var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

// 8. Write a function that takes an array like toonimals and
//returns an array with only the toons that are cats.

var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]

var animal = toonimals.filter(value => value.animal === "cat")

console.log(animal);
