/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/
console.log("Input is 90")
console.log(checkOddOrEven(90))
console.log("Input is 11")
console.log(checkOddOrEven(11))

function checkOddOrEven (number){
    if((number%2) == 0){
        return (number+" is Even")
    }
    else
        return (number +" is Odd")
}