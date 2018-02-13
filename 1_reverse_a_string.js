function reverseString(){

    var array = [];
    array = str.split('');

    var joinedString = '';
    newArray = array.reverse();
    joinedString = newArray.join('');

    return joinedString;
}

reverseString("hello");