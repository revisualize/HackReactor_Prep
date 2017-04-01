/*
Write a function called "getAllKeys" which returns an array of all the input object's keys.
*/
function getAllKeys(obj) {
  let arr = [];
  for (let i in obj) {
    arr.push(i);
  }
  return arr;
}

/* Example input: 
{
  name : 'Sam',
  age : 25,
  hasPets : true
}

Function's return value (output) :
['name', 'age', 'hasPets']

Do not use "Object.keys" to solve this prompt.
*/
