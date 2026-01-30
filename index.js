// Task 1.1 – Scope Exploration
// Create a program where:
// A variable is declared using  var  inside a block
// The same variable name is declared using  let  inside another block
// Access both variables outside the blocks
// Requirement:
// Use non-obvious variable names of your own choosing
// Print the value before, inside, and after the block
// Change the values at least once and re-run
// Do not explain in words. The console output sequence must make the behavior obvious.
//! Task 1.1 – Scope Exploration (Started)
console.log(HappyDays);
{
  var HappyDays = 1070;
  console.log(HappyDays);
}
{
  let HappyDays = 5030;
  console.log(HappyDays);
}
console.log(HappyDays);
console.log(HappyDays);
// Task 1.1 – Scope Exploration (Completed)
