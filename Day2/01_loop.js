/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

let value = 5
function sum(inputValue){
    let total=0
    for(let i=1;i<=inputValue;i++){
        total = total + i;
    }
    return total
}
let finalSum = 0
for(let i = 1; i<=value;i++){
    console.log(i +"(",+sum(i)+")")
}

