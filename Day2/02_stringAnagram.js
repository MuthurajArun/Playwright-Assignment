/*
Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false
*/
let stringValue1 = ["listen","silent"]
let stringValue2 = ['hello','world']

function isAnagram(inputValue){
    let anagram = false
    if(inputValue[0].length == inputValue[1].length){
        let value1 = (inputValue[0])
        let value2 = (inputValue[1])
        value1 = sortSting(inputValue[0])
        value2 = sortSting(inputValue[1])
        if(value1 === value2)
        anagram = true
    }
    return anagram
}
function sortSting(givenName){
    let splitName = givenName.split("")
    splitName.sort()
    let final = splitName.join("")
    return final
    }

console.log(stringValue1 + " is Anagram : " + isAnagram(stringValue1))
console.log(stringValue2 + " is Anagram : " + isAnagram(stringValue2))