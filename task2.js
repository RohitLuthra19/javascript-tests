function correctErrorsInString(inputStr) {
    const strArr = inputStr.split(/(?=[A-Z])/);
    const outputStr = []
    strArr.forEach(sentence => {
        outputStr.push(sentence.trim())
    })
    const charArr = outputStr.join(". ").split("");

    charArr.forEach((char, index) => {
        if(char === '.') {
            charArr[index+2] = charArr[index+2].toUpperCase()
        }
    })

    return charArr.join("")
}

correctErrorsInString("John have an apple The sky is blue. they get a coin");