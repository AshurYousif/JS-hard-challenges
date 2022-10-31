function sortHighToLow(array) {
  return array.sort((a, b) => a.price - b.price);
}

let array = [
  { id: 1, price: 50 },
  { id: 2, price: 30 },
  { id: 3, price: 60 },
  { id: 4, price: 10 },
];

console.log(sortHighToLow(array));
