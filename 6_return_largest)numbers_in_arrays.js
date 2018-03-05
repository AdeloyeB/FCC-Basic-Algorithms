
function largestOfFour(arr) {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let subarr = arr[i];
    let biggestNum = 0;
    for (let j = 0; j < subarr.length; j++) {
      //console.log(subarr[j]);
      if(subarr[j] > biggestNum){
        biggestNum = subarr[j];
      }
    }
    newArr.push(biggestNum);
  }
    console.log(newArr);
    return newArr;
    
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  