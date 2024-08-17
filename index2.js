function sumOfAP(a, d, n) {
   
    return (n / 2) * (2 * a + (n - 1) * d);
}

function sumOfGP(a, r, n) {
    
    if (r === 1) {
        return a * n; 
    }
    return a * ((Math.pow(r, n) - 1) / (r - 1));
}

// Example :
let apSum = sumOfAP(2, 3, 5); 
console.log("Sum of AP:", apSum);

let gpSum = sumOfGP(1, 2, 4); 
console.log("Sum of GP:", gpSum);


function binarySearch(arr, target) {
    arr.sort((a, b) => a - b);
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1; 
  }
  
  // Example :
  let arr = [5, 2, 8, 1, 9];
  let target = 8;
  let result = binarySearch(arr, target);
  
  if (result !== -1) {
    console.log(`Element found at index ${result}`);
  } else {
    console.log('Element not found in the array');
  }

  
  function matrixMultiply(A, B) {
    let rowsA = A.length;
    let colsA = A[0].length;
    let rowsB = B.length;
    let colsB = B[0].length;
  
    if (colsA !== rowsB) {
      throw new Error('Matrix multiplication is not possible');
    }
  
    let C = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0));
  
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        for (let k = 0; k < colsA; k++) {
          C[i][j] += A[i][k] * B[k][j];
        }
      }
    }
  
    return C;
  }
  
  // Example :
  let A = [[1, 2, 3], [4, 5, 6]];
  let B = [[7, 8], [9, 10], [11, 12]];
  let C = matrixMultiply(A, B);
  
  console.log('The result of matrix multiplication is:');
  C.forEach((row) => console.log(row.join(' ')));


 /* Competitive Programming Question based on Array Concept :
 finding the maximum sum of a subarray within a one-dimensional array.*/

 function maxSubarraySum(array) {
    let maxSoFar = array[0];
    let maxEndingHere = array[0];
  
    for (let i = 1; i < arr.length; i++) {
      maxEndingHere = Math.max(array[i], maxEndingHere + array[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
  
    return maxSoFar;
  }
  
  // Example :
  let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let resul = maxSubarraySum(array);
  console.log(`Maximum sum of a subarray is: ${resul}`);