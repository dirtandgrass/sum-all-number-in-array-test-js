const sumItems = (array) => {
  let sum = 0;
  for (let item of array) {
    if (Array.isArray(item)) { // recursive case
      sum += sumItems(item);
    } else {
      sum += item; // base case
    }
  }
  return sum; // return the sum
};

module.exports = sumItems;