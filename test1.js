function reversedWordMoreThanSpecifiedLettersInString(inputStr, length) {
    const strArr = inputStr.split(" ")
    const outputStr = []
    strArr.forEach(word => {
        if(word.length > length) {
            outputStr.push(word?.split("").reverse().join(""))
        } else {
            outputStr.push(word)
        }
    })
    return outputStr;
}
