const sumAll = function (min, max) {
    let numbers = [];
    let sum = 0;
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }
    numbers.forEach((item) => {
        sum += item;
    })
    return sum;
};


// Take a min and max as parameters
// Create a for loop to add 1 until min equals max
// Store numbers into a new array
// Add new array and return output


// Do not edit below this line
module.exports = sumAll;
