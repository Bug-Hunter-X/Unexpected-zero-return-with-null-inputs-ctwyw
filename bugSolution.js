function foo(a, b) {
  if (a === null && b === null) {
    return null; // or throw an error or provide a default value as needed
  } else if (a === null || b === null) {
    return 0; 
  } else {
    return a + b; 
  }
}

console.log(foo(null, 1)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: null
console.log(foo(1, 2)); // Output: 3