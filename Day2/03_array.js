/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0] */
let num =  [0,1,0,3,12,0,123,24]

function countZero(inputArray){
    let zeroCount = 0
    let arrayLength = inputArray.length
    for(let i = 0;i<arrayLength;i++){
        if(inputArray[i] == 0){
            for(j=i;j<inputArray.length;j++)
            if(inputArray[j+1]!=null)
                inputArray[j]=inputArray[j+1]
            else
                inputArray[j]=0
        }
    }
    return inputArray
}

console.log("final array : "+countZero(num))
