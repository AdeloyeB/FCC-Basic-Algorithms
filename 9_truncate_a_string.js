function truncateString(str, num) {
  // Clear out that junk in your trunk
  var string = str;
  var dots = "...";

  if (num < string.length && num > 3) {
    return string.slice(0, num - 3) + "...";
  } else if (string.length > num && num <= 3) {
    return string.slice(0, num) + "...";
  } else {
    return string;
  }
}

console.log(truncateString("Absolutely Longer", 2));

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));

console.log(truncateString("A-", 1));
