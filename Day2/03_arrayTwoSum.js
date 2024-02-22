/*
2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)
*/

const inputnumber = [2,4,7,8,11,14]
const target1 = 18
function twoSum(nums,target){
let matchingTarget =[]
let k=0
for(let i = 0;i<nums.length;i++){
    for(let j=0;j<(nums.length)/2;j++){
        if(nums[i]+nums[j]==target){
            matchingTarget[k] = [j,i]
            k++
        }
    }
}
return matchingTarget
}

console.log(twoSum(inputnumber,target1))
