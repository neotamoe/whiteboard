// Add Up The Numbers From A Single Number
// algorithms
// math
// recursion
// Create a function that takes a number as an argument. Add up all the numbers
// from 1 to the number you passed to the function.  For example, if the input
// is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num) {
	var absolute = parseInt(num - 0);
  console.log('absolute:' + absolute);

  var total = 0;
  console.log('total not in loop: ' + total);
  for (var i = 1; i <= absolute; i++) {
    console.log('absolute in loop: ' + absolute);
		total += i;
    console.log('total in loop: ' + total);
  }
  return total;
}
