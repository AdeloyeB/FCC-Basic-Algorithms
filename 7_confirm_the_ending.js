
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    var endValue = str.substr(-1, 1);
    if (endValue === target) {
      return true;
    } else{
      return false;
    }

  }
  
  confirmEnding("Bastian", "n");