// https://leetcode.com/problems/two-sum/
// Given an array of Numbers & a target, return the array locations that equal up to the target. ([1,4,5,15], 9) return [1,2]. Can assume only one solution & each number only used once

// After reviewing solutions to this problem on leetcode, I changed a few things around including the handling of the return value
// I also removed the break & the return array as they were unnecessary
twoSum = (nums,target) => {
    if (nums.length < 2){
        return("there are not enough numbers in the array to complete this")
    }
    for (let x = 0; x < nums.length-1; x++) {
        for (let y = x+1; y < nums.length; y++){
            let targetValue = nums[x] + nums[y];
            if (targetValue === target){
             return ([x,y])   
            }                
            }
        }
    return("there is no valid set of nums");
    };

/* ORIGINAL ANSWER
twoSum = (inputArray,target) => {
    // Declare returnArray variable to be able to be able to store the two array values
    let returnArray = [];
    // Loop through each possible combos in the array to find which combo adds to the target
    for (let x = 0; x < inputArray.length-1; x++) {
        // console.log("we are on array value " + x);
        for (let y = x+1; y < inputArray.length; y++){
            let targetValue = inputArray[x] + inputArray[y];
            // console.log("we just got targetvalue " + targetValue + " by adding " + inputArray[x] + " & " + inputArray[y]);
            if (targetValue === target){
                console.log("target value is " + targetValue);
                returnArray=[x,y]
                break
            };
        }
    };
    return(returnArray);
    console.log(returnArray)
}
*/



console.log(twoSums([1,2,3,4],7))
console.log(twoSums([0,5,9,1,4,67,3,48,43,500,1,7,97],509))

