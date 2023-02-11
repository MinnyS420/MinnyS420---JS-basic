let numbers = [3, 5, 6, 8, 11];

function findLargestNumber(inputArray) {
    let counter = 0;
    let max = -Infinity;
    while (counter < inputArray.length) {
        if (inputArray[counter] > max) {
            max = inputArray[counter];
        }
        console.log(max);
        counter++
    }
    return max;

}

function findSmallestNumber(inputArray) {
    let counter = 0;
    let min = +Infinity;
    while (counter < inputArray.length) {
        if (inputArray[counter] < min) {
            min = inputArray[counter];
        }
        counter++
    }
    return min;

}

let maxOfNumbers = findLargestNumber(numbers);
console.log(`Biggest number is ${maxOfNumbers}`);

let minOfNumbers = findSmallestNumber(numbers);
console.log(`Smallest number is ${minOfNumbers}`);

let sumOfNumbers = maxOfNumbers + minOfNumbers;
console.log(`The Sum of Max and Min is : ${sumOfNumbers}`);