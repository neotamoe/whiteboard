// Return The Four Letter Strings
// strings arrays validation
// Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
// Examples
// ["Ryan", "Kieran", "Jason", "Matt"] => ["Ryan", "Matt"]
// ["Tomato", "Potato", "Pair"] => ["Pair"]
// ["Kangaroo", "Bear", "Fox"] => ["Bear"]
// Gotchas
// No gotchas. You can expect valid strings for all test cases.

function isFourLetters(arr) {
  var onlyFour = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length === 4) {
      onlyFour.push(arr[i]);
    }
  } return onlyFour;
}
