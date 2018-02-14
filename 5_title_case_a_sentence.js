
function titleCase(str) {
    var array = [];
    array = str.split(' ');

    for (var i = 0; i < array.length; i++) {
        array[i].charAt(0).toUpperCase();
    }

    var newString = array.toString()
    return newString;
    //return array[0].length;
  }
  
  titleCase("i'm a little tea pot");
  