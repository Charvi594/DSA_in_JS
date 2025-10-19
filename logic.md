# Strings
# Toggle character logic
- Start by defining a string
- Record the ASCII value of the entire string by looping over it and storing it into a variable using charCodeAt()
- Check the condition whether the ASCII value lies between 65 and 90(capital letters), if it does add 32 to it to make the ASCII value equal to the ASCII value of small letters and then return the character using String.fromCharCode()
- Similarly if the ASCII value ranges between 97 and 122(small letters), subtract 32 from it to make the ASCII value equal to ASCII value of the capital letters and then return the character using String.fromCharCode()
- return & End

# Palindrome of a String
- Start by taking a string as an input
- Define a variable isPalindrome and set it to = true
- Make use of two pointers i and j to compare between the first and last element of a string recursively.
- At first set i = charAt(0) and j = charAt(str.length-1)
- In a while loop , In a condition , if the charAt(i) != charAt(j) then the isPalindrome will set to false.
- And the i and j will increment and decrement respectively.
- One more condition out of the while loop : if isPalindrome = true , log Palindromic String else log Not a palindromic string 
- End

# String Reversal
- Start by taking string as an input which is to be reversed.
- define a reverse variable as an empty string
- loop through a string and start iterating from the end of the string and decrementing it
- Store the values from the end of the string into the reverse variable by simply concatenating.
- Return the reverse variable and end.

# Frequency of a character
- Start by taking string as an input
- Define an empty object
- loop over a string using for of
- In an if condition check whether the character of str exists in object (if(obj[s])) ,
- If it does , increment the obj[s]
- Else set obj[s] = 1
- console.log(obj)

# Sorting
# Bubble Sort
- Start by defining an array
- Run two nested loops :
- Outer loop will calculate the number of iterations which will always be the length of array - 1 
- Inner loop will calculate the number of comparisons to be made which will always be the length of array - 1 - i
- Inner loop will have condition which checks whether the current element is greater than the next element of array.
- The inner loop will perform swapping if the condition is true.
- End

# Selection Sort
- Start by defining an array
- Run two nested loops
- The outer loop will run from 0 to n-1 
- After that we will set the minIndex to i
- The inner loop will then run from i+1 to n (since we will loop through the first position of unsorted array)
- Then within that, we will apply a condition to check whether the current element is less than our minIndex or not.
- If it is less then we will update the value of minIndex to the current element.
- After the inner loop ends, check whether minIndex ! = i, and if the condition is true , it will swap the minIndex with i.
- End 
