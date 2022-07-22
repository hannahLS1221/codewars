/*You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.*/

function twoSort(s){
    //1. sort the string alphabetically based on the first index, hence i'm using [0].  
    //2. then split the string out to each letter, 
    //3. then join the letters back with characters (***)
    return s.sort()[0].split('').join('***')
}