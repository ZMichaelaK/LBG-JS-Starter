//function sum(num1, num2) {
  //  return num1 * num2;
  //}
  //naming my variable, sum is the function
  //let add = sum(4, 5);
  //console.log(add);

  function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0)
    return("FizzBuzz");
  else if (num % 3 === 0) {
  return("fizz");
} else if (num % 5 === 0) {
  return("buzz");
} else {
    return(num);
  }
}

//const onoma = (a, b) => a * b;