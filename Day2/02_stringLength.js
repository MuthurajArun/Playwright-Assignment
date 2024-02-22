/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4. 
*/
let stringValue1 = "Hello World"
let stringValue2 = "   fly me   to   the moon  "

function calculateLength (value){
    value = value.trim()
    let valueArray = value.split(" ")
    return (valueArray[valueArray.length-1]).length
}

console.log(calculateLength(stringValue1))
console.log(calculateLength(stringValue2))