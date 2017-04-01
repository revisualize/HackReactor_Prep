/*
Write a function 'transformFirstAndLast' that takes in an array, and returns an object with: 
1) the first element of the array as the object's key, and 
2) the last element of the array as that key's value.
*/
function transformFirstAndLast(array) {
  let obj = {};
  obj[array[0]] = array[array.length - 1];
  return obj;
}

// ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
// { Queen : 'Beyonce' }
