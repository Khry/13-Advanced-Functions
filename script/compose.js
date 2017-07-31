function compose(functions) {
  return function() {
    var result = arguments;
    for(var i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  }
}
module.exports = compose;
