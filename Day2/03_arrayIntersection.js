/*2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]

Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/
let nums1 = [1,2,2,1]
let nums2 = [2,2]
let nums3 = [4,9,5]
let nums4 = [9,4,9,8,4]
function intersection(input1,input2){
    let i =0
    let j =0
    let output = []
    for(;i < input1.length ;i++){
        if(input2.indexOf(input1[i]) != -1){
            output[j++] = input1[i]
        }
     
    } 
}

console.log(intersection(nums1,nums2))
console.log(intersection(nums3,nums4))

