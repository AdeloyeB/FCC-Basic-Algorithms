function chunkArrayInGroups(arr, size) {
  // Break it up.
  var chunkArray = [];

  for (var i = 0; i < arr.length; i += size) {
    var Array = arr.slice(i, i + size);
    chunkArray.push(Array);
  }
  console.log(chunkArray);
  return chunkArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
