/*
4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
function test(){
let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
let output = []
let j=0
    let count = inputArray.length
    for(let i =0;i<count;i++){
          let value = inputArray[i]
        let lastIndex = inputArray.lastIndexOf(value)
        if(output.indexOf(value) == -1){
            output[j] = value
            j++
        }
    }
    return output
}
  
console.log(test())