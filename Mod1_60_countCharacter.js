/*
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
*/

function countCharacter(str, char) {
  return (str != "" && char.length != 0) ? (str.match(new RegExp(char, "g")) || []).length : 0;
}
var output = countCharacter('aaaa', '');
console.log(output); 

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

The above function worked, but didn't pass the all the tests. The below one works and passes all the tests.

function countCharacter(str, char) {
  // your code here
for (var i = 0, count=0; i<str.length; count+=+(char===str[i++]));
return count;
}

countCharacter("I am a hacker", "a");
