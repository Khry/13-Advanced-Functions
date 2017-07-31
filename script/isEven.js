//1__________________________________
function isEven(num){
  return (++num) ? !!(num%2) : isEven(num);
}
module.exports = isEven;