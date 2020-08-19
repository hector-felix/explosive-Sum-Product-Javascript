function exclusiveSum(arr) {
  let sum = 0;
  let result = [];
  for(let k = 0; k < arr.length; k++) {
    result[k] = 0;
  }
  
    for(let i = 0; i < arr.length; i++) {
       for(let j = 0; j < arr.length; j++) {
         if(i != j)
        result[i] += arr[j];
       }
    }
    //console.log(result);
    return result;
}

function exclusiveProduct(arr) {
  let sum = 0;
  let result = [];
  for(let k = 0; k < arr.length; k++) {
    result[k] = 1;
  }
  
    for(let i = 0; i < arr.length; i++) {
       for(let j = 0; j < arr.length; j++) {
         if(i !== j)
        result[i] *= arr[j];
       }
    }
    //console.log(result);
    return result;
}

function exclusiveSumTests() {
  console.log(exclusiveSum([1,3,4,2]), ' -> ', [9, 7, 6, 8]);
  console.log(exclusiveSum([1,2,5]), ' -> ', [7, 6, 3]);
  console.log(exclusiveSum([1,2,5,0]), ' -> ', [7, 6, 3, 8]);
  console.log(exclusiveSum([1]), ' -> ', [0]);
}

exclusiveSumTests() // uncomment to test
console.log(exclusiveProduct([1,3,4,2]));
console.log([1,3,4,2]);
console.log(([1,2,5]);
[1,2,5,0];
[1];


console.log()