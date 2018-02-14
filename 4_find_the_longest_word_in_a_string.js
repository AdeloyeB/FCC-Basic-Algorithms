
function findLongestWord(str) {
    var array = [];
    array = str.split(' ');

    array.sort(function(a, b){
      return b.length - a.length;
    });

    return array[0].length;
    //return array[0].length;
  }
  
  findLongestWord("What is the average airspeed velocity of an unladen swallow");