/*

1) Find the number of occurances.  

const nums = [2,4,5,2,1,2]
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count*/


let nums = [2,4,5,2,1,2]
let k = 2
let totalCount = 0
let count = nums.length
for(let i =0;i<count;i++){
    if(nums[i] == k)
    totalCount++;
}

console.log(`Number of occurence of ${k} in given array is ${totalCount}`)