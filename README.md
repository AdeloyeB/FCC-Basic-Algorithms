# Basic FCC Algorithms Solutions

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__Index.html is just used for chrome console and debugging__

## 1 - Reverse a String
__Reversing a string-__ took a bit of time for me to understand since I am quite new to algorithms in general 

1. Create a new empty array.
2. Store the split string into the array.
3. Create a empty string variable.
4. Create another array and store the reversed version of the original array.
5. Store the new array joined into the empty string variable and return the string variable.

## 2 - Factorialize a Number
__Factorising a number__ was fine due to the fact because I already had an idea of how the problem needed to be solved so it was following those systemmatic steps and turning it into code.

1. Create a new empty array
2. Create a forloop which pushes numbers from num all the way down to zero onto the array.
3. Create an variable equal to zero.
4. Use the array.reduce version with the new variable which mulitplies the previous values and current values. 
5. An accumlator of 1 is needed to mulitply the answer given by 1.


## 3 - Check for Palindromes
__Checking for Palindromes__ This task was also fine. I do not think I originally used the most efficient method at first and it kept giving me an error when running through the word: "almostomla" because I believe I wrote the code to just check if the letters in each compared word were the same rather than doing that and checking the ordering of each letter to ensure it actually matches in a reversed version. This game me insight into the importance of checking mulitple boxes rather than focusing on one aspect of the problem.

1. Convert the str inputting into a lowercase and remove all non-alphabatical stuff like spaces etc. 
2. Create a for loop with goes through the entire length of the word.
3. If statement that checks if the letters are the same and in the correct order. If it is not then it returns false and if it is then it returns true.