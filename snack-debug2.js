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