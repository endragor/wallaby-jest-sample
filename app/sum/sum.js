
function sum(value1, value2) {
  var sum = value1;
  for (var i = 0; i < value2; ++i) {
    sum += 1;
  }
  return sum;
}

module.exports = sum;