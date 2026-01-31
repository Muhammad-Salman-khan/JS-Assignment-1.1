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
// console.log(HappyDays);
// {
//   var HappyDays = 1070;
//   console.log(HappyDays);
// }
// {
//   let HappyDays = 5030;
//   console.log(HappyDays);
// }
// console.log(HappyDays);
// console.log(HappyDays);
// Task 1.1 – Scope Exploration (Completed)
// ----------------------------------------------------------

// Task 1.2 – Re-declaration & Re-assignment
// Re-declares a variable using  var
// Attempts the same with  let
// Attempts to modify a  const  value indirectly (object or array)
// Constraint:
// The program must continue running after errors using controlled execution (e.g., try/catch)
// Log exactly what succeeds and what fails, in your own wording via output labels.

// Task 1.2 – Re-declaration & Re-assignment (Started!)
// try {
//   var variableThatwillRedeclare = 36;
//   var variableThatwillRedeclare = 36;
//   console.log(
//     `var redeclare and worked Perfectly variableThatwillRedeclare: ${variableThatwillRedeclare}`,
//   );
// } catch (erorrs) {
//   console.log(erorrs);
// }
// try {
//   let myLetVariable = "Hello Good Days";
//   let myLetVariable = "Hello Good Days";
//   console.log(
//     `Let redeclare  and didn't worked myLetVariable: ${myLetVariable}`,
//   );
// } catch (erorrs) {
//   console.log(
//     `It failed due to redeclaring with the same variable name ${erorrs}`,
//   );
// }
// try {
//   const me = {
//     myName: "Hachiman",
//     age: 50 + 30,
//   };
//   me.age = 20 + 20;
//   console.log(`Const modified sucssfully and worked variable me:`, me);
// } catch (erorrs) {
//   console.log(`if it's failed `);
// }

// Task 1.2(Completed!)
// Task 1.3 – Loop Behavior Test
// Create three loops:
// One using  var
// One using  let
// One using  const
// Inside each loop, log values using a delayed operation.
// Mandatory:
// Use diferent delay timings
// Add a fnal log after all delays complete
// Your output order must clearly show why the behavior difers

// Task 1.3 – Loop Behavior Test (Started!)
// for (var i = 0; i < 5; i++) {
//   setTimeout(
//     () => console.log(`[Var] variable output: ${i} `),
//     (i * 130 - 2 + 12) / 30 + i,
//   );
// }

// for (let elem = 0; elem < 5; elem++) {
//   setTimeout(
//     () => console.log(`[let] variable output: ${elem}`),
//     (elem * 160) / 42,
//   );
// }

// for (const key of [0, 1, 2, 3, 4]) {
//   setTimeout(
//     () => console.log(`[const] variable output: ${key}`),
//     (key * 200) / 22,
//   );
// }
// setTimeout(
//   () =>
//     console.log(
//       "[Var] output shows all the 5's because var is a function scope not a block scope and the loop reuse a single variable binding like it's a single source of truth.And the delayed setTimeout fuction run after the loop is done and read the value of that variable.\n[let] output show value 0, 1, 2, 3, 4, because let is a block scope and javascript creates a new lexical binding (in simple term a new variable) so it can capture each itration \n[const] output shows the same result as let but used different loop for of loop because const also try to create new variable for each itration and const default behavior you can not redeclare the variable",
//     ),
//   1000,
// );

// Task 1.3 – Loop Behavior Test (Completed)

// Section 2: Template Literals (Practical Usage)
// Task 2.1 – Dynamic Message Generator
// Create a function that accepts:
// User name
// Course name
// Completion percentage
// Return a message using template literals only that dynamically formats the message across multiple lines

// Section 2: Template Literals (Practical Usage) (Started!)

function ProgressTracker(name, cousreName, completionPercentage) {
  return `Hello ${name}, your course ${cousreName} is (${completionPercentage}%) completed`;
}
console.log(ProgressTracker("Peter", "Agentic Ai", 40));

// Section 2: Template Literals (Practical Usage) (Completed!)
