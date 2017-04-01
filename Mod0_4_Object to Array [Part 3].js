/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]
*/

function convertObjectToList(obj) {
  let arr = [];
  for (let i in obj) {
    arr.push([i, obj[i]]);
  }
  return arr;
}

var data = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

convertObjectToList(data);

data = {
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

convertObjectToList(data);
