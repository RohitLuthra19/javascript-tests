### Task 2
Write a function that will correct the errors in given string. Below are the rules
- For every captial letter, assume the need to place a fullstop at the end of the sentence before the current one.
- For every full-stops, there shall be only one whitespace to the next sentence.
- Each first letter of every sentance must be capitalised.
- Trailling and leading spaces to be removed.
#### input
correct_it("John have   an apple The sky is blue.  they get a coin")
#### output
"John have an apple. The sky is blue. They get a coin."