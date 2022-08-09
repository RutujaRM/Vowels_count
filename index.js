/*
Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5

*/

const str=prompt("Enter String");

function vowels(str)
{
    let vowels='aeiouAEIOU';
    let count=0;

    for(let i=0 ; i<str.length ; i++)
    {
       if(vowels.indexOf(str[i]) !==-1 )
       {
         count++;
         
       }
    }
    return count;  
}
console.log(vowels(str));

