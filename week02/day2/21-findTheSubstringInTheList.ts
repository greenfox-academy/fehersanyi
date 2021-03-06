'use strict';
//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list
//  Example
console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`

function substrlist (myString: string, myListOfStrings: string []) {
  let letThereBeLight = [];
    for(let i: number = 0; i < myListOfStrings.length; i++) {
      if(myListOfStrings[i].indexOf(myString) !== -1) {
       letThereBeLight.push(i);
      }
    }
      if(letThereBeLight.length > 0) {
        return letThereBeLight[0];
      }
      return -1;
    }