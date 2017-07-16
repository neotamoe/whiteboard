// Reverse The Order Of A String
// strings formatting
// Create a function that takes a string as its argument and returns the string in reversed order.
// Examples
// "Hello World" => "dlroW olleH"
// "The quick brown fox." => ".xof nworb kciuq ehT"
// "Edabit is really helpful!" => "!lufpleh yllaer si tibadE"


function reverse(str) {
  var newString = '';
  var newArray = str.split('');
	newArray = newArray.reverse();
  newString = newArray.join('');
  return newString;
}
