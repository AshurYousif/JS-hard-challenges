function showRating(rating) {
  let halfRating = rating % 1;
  let ratingString = "";
  for (let i = 1; i <= rating; i++) {
    ratingString = ratingString + "* "
  }

  if (halfRating === 0.5) {
    ratingString = ratingString + "."
  }
  return ratingString
}

console.log(showRating(5.5));
