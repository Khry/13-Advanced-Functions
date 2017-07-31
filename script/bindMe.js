Function.prototype.bindMe = function (context) {
  var fn = this;
  var bindArgs = [].slice.call(arguments, 2);
  return function() {
    var fnArgs = [].slice.call(arguments);
    return fn.apply(context, bindArgs.concat(fnArgs));
  }
}
module.exports = bindMe;
