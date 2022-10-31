function sortLowestToHighestPrice(array) {
  return array.sort((a, b) => a - b);
}

let array = [20, 40, 10, 30, 50, 10];

console.log(sortLowestToHighestPrice(array));
