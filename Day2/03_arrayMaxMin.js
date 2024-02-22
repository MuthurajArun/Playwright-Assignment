/*3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/

let inputArray = [34, 7, 21, 89, 54, 10, 91, 67]
function maxMin(value,maxOrMin){
    let output = value[0]
    if(maxOrMin == "max"){
    for(let i =1;i<value.length;i++){
        if(value[i]>output){
            output = value[i]
        }
    }
}
if(maxOrMin == "min"){
    for(let i =1;i<value.length;i++){
        if(value[i]<output){
            output = value[i]
        }
    }
}
return output
}

let maximum = maxMin(inputArray,"max")
let minimum = maxMin(inputArray,"min")
console.log(`Maximum value is ${maximum} and the index is ${inputArray.indexOf(maximum)}`)
console.log(`Minimum value is ${minimum} and the index is ${inputArray.indexOf(minimum)}`)