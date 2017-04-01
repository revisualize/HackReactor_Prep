/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/


function countWords(str) {
  return (str === "") ? {} : str.split(' ').reduce(function (acc, curr) {
    if (acc.hasOwnProperty(curr)) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
