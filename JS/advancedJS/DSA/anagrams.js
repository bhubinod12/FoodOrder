// Write the code given If two strings are anagrams of one another, then return true.

var firstWord = "Binod";
var secondWord = "odinB";


function isAnagram(one, two) {
  //Change both words to lowercase for case insensitivity..
  var a = one.toLowerCase();
  var b = two.toLowerCase();

  // Sort the strings, then combine the array to a string. Examine the outcomes.
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}
isAnagram(firstWord, secondWord); // true

