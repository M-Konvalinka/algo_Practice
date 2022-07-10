// https://leetcode.com/problems/two-sum/
// Given an array of Numbers & a target, return the array locations that equal up to the target. ([1,4,5,15], 9) return [1,2]. Can assume only one solution & each number only used once


 twoSums = (inputArray,target) => {
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



twoSums([1,2,3,4],7)
twoSums([0,5,9,1,4,67,3,48,43,500,1,7,97],509)


