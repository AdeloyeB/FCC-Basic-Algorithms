function factorialize(num){

    var array = [];

    for (let i = 0; i <= num; i++) {
        array.push(i);
    }

    var newVal = 0;
    newVal = array.reduce(function(previousVal, currentVal){
        return previousVal * currentVal;
    }, 1);

    return newVal;
}

factorialize(5);