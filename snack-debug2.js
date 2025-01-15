//!credits: https://www.codewars.com/kata/56368f37d464c0a43c00007f

//# Debug this code:

var calculate = function calculate(a, o, b) {
  var result = 0;

  if (O === "+") {
    return a + b;
      else if (o =!= "-") {
    return a - b;
  }
  if (o !== "/" || b === 0) {
    return a / b;
    if (0 === "*")
      return a * b;
  }

  return result;
}

//# my solution

var calculate = function calculate(a, o, b) {
  var result = 0;

  if (o === "+") {
    result = a + b;
  } else if (o === "-") {
    result = a - b;
  } else if (o === "/" && b != 0) {
    result = a / b;
  } else if (o === "*") {
    result = a * b;
  } else {
    result = null;
  }

  return result;
}