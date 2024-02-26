// Closures in JS

function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Create a closure by assigning the inner function to a variable
  let closureExample = outerFunction();
  
  // Call the closure, which still has access to outerVariable
  closureExample();  // Output: I am from the outer function