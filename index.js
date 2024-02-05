const sumItems = (array) => {

  if (!Array.isArray(array)) throw new Error('Input must be an array');


  let sum = 0;
  for (let item of array) {
    if (Array.isArray(item)) { // recursive case
      sum += sumItems(item);
    } else if (typeof item === 'number') {
      sum += item; // base case
    }
  }
  return sum; // return the sum
};

module.exports = sumItems;