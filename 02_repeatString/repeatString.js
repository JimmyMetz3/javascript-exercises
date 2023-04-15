const repeatString = function (phrase, num) {
    let repeatedString = "";

    for (let i = 0; i < num; i++) {
        repeatedString += phrase;
    };

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
