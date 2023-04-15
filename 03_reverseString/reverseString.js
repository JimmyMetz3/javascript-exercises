const reverseString = function (phrase) {
    let phraseList = phrase.split('');
    let reversedList = phraseList.reverse();
    return reversedList.join("");
};



// Do not edit below this line
module.exports = reverseString;
