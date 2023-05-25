function Factorial(number) {
  if (number == 1 || 0) {
    return 1;
  }
  if (number == 2) {
    return 2;
  }
  return number * Factorial(number - 1);
}
console.log(Factorial(4));
console.log(Factorial(5));
console.log(Factorial(8));
console.log(Factorial(2));
console.log(Factorial(1));
