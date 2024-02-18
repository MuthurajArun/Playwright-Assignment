/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

console.log("|Student | Score |   Class    ")
console.log("------------------------------")
console.log("|Muthu   |  92   |  ",calculateGrade(92))
console.log("|Arun    |  90   |  ",calculateGrade(90))
console.log("|Kiran   |  82   |  ",calculateGrade(82))
console.log("|Anja    |  80   |  ",calculateGrade(80))
console.log("|Mani    |  76   |  ",calculateGrade(76))
console.log("|Logan   |  50   |  ",calculateGrade(50))
console.log("|Asha    |  30   |  ",calculateGrade(30))
console.log("|Vino    |  -2   |  ",calculateGrade(-2))


function calculateGrade (score){
    switch(true){
        case score>=90:
            return "Distinction";
            break;
        case score>=80 && score <90:
            return "First class";
            break;
        case score>=50 && score<80:
            return "Second Class";
            break;
        case score<50 && score >=0:
            return "Fail";
            break;
        default:
            return "Please enter a valid value";
            break;
    }
}