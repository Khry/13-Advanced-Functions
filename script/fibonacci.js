function fibonacci(n) {
  var results = {};
  function fib(n) {
    var value;
    if (results[n] !== undefined) {
      value = results[n];
    } else {
      if (n < 2)
        value = n;
      else
        value = fib(n - 1) + fib(n - 2);    
      results[n] = value;
    }  
    return value;
  }
  return fib(n);
}
module.exports = nameOfTheFunction
