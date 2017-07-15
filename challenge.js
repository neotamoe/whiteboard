// var test = [1,3,5,6];
var test = [1,2,4,7,9,10,14,15,17];
var testSum = 26;

function checkSum (array, sum){
  var start = array[0];
  var end = (array[array.length-1]);
  console.log('#1 if--> start=' + start + ' end=' + end + ' sum=' + sum);

  if (start + end === sum) {
    return true;
  } else if (start === end){
    return false;
  } else if (start + end < sum) {
    array.shift();
    return checkSum(array, sum);
  } else if (start + end > sum) {
    array.pop();
    return checkSum(array, sum);
  } else {
    return false;
  }
}

console.log(checkSum(test, testSum));


// for loop in a for loop
// index the array comparing indexes of each array
