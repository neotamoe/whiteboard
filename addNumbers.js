// Add Up The Numbers From A Single Number
// algorithms
// math
// recursion
// Create a function that takes a number as an argument. Add up all the numbers
// from 1 to the number you passed to the function.  For example, if the input
// is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num) {
  var total = 0;
  for (var i = 1; i <= num; i++) {
		total += i;
    console.log('total:' + total);
  }
  return total;
}

addUp(4);
