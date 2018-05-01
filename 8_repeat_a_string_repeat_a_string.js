function repeatStringNumTimes(str, num) {
  if (num > 0) {
    var count = num;
    var x = str.repeat(count);
    return x;
  } else {
    return "";
  }
}
repeatStringNumTimes("abc", 3);
