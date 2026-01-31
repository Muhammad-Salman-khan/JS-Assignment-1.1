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

// function trackProgress(name, cousreName, completionPercentage) {
//   return `Hello ${name}, your course ${cousreName} is (${completionPercentage}%) completed`;
// }
// console.log(trackProgress("Peter", "Agentic Ai", 40));

// Section 2: Template Literals (Practical Usage) (Completed!)

// Task 2.2 – Conditional Templates
// Generate diferent template literal outputs based on:
// Pass / Fail status
// Grade boundaries
// Avoid string concatenation completely.
// Task 2.2 – Conditional Templates (Started!)
// const checkResult = (grade) => {
//   if (grade >= 92) {
//     return `Outstanding performance!.You passed with a Highest score:${grade}/100.`;
//   }
//   if (grade >= 80) {
//     return `Good job!.You passed with a good score:${grade}/100.`;
//   }
//   if (grade >= 60) {
//     return `You passed with a score:${grade}/100. Good`;
//   }
//   if (grade >= 50) {
//     return `You passed with a score:${grade}/100.need littel inprovement`;
//   }
//   if (grade >= 30) {
//     return `You Bariely Passed with a score:${grade}/100.Poor performance`;
//   }
//   if (grade < 30) {
//     return `You Failed with a score: ${grade}/100.`;
//   }
// };
// console.log(checkResult(95));
// Task 2.2 – Conditional Templates (Completed!)

// Section 3: Arrow Functions (Behavior Matters)
// Task 3.1 – Arrow vs Regular Function
// Create an object with:
// One regular function
// One arrow function
// Both should attempt to access  this .
// Log results and compare behavior.

// Task 3.1 – Arrow vs Regular Function (Started!)
// const myObject = {
//   name: "Hachiman",
//   regularFuntion: function () {
//     return `Regular Function ${this.name}`;
//   },
//   arrowFunction: () => {
//     return `arrow Funtion ${this.name}`;
//   },
// };
// console.log(myObject.regularFuntion());
// console.log(myObject.arrowFunction());

// console.log(
//   `regular function can access this.value because javascript assign them at call time \n and for arrow function javascript never assign "this". it simpley inherate it from it surrounding scope`,
// );

// Task 3.1 – Arrow vs Regular Function (Completed!)

/* Task 3.2 – Implicit vs Explicit Return
Write arrow functions that:
Use implicit return
Use explicit return
Apply them to an array transformation */

// Task 3.2 – Implicit vs Explicit Return (Started!)
// const MyArr = [110, 103];
// const MyFun = MyArr.map((e) => e * 10);
// const arrowFuntionExplicte = MyArr.map((e) => {
//   const result = e + (100 * 4) / 5;
//   return result;
// });
// console.log(`implicit arrow Function`, MyFun);
// console.log(`Explicit Arrow Function`, arrowFuntionExplicte);

// Task 3.2 – Implicit vs Explicit Return (Completed!)

// Task 3.3 – Arrow Functions in Callbacks
// Rewrite a callback-based operation twice:
// Once using a normal function
// Once using an arrow function
// Observe readability and behavior diferences.

// Task 3.3 – Arrow Functions in Callbacks (Started!)
// const scr = [1, 2, 4];

// const CallbacksNormalFuntion = scr.map(function (a, b) {
//   return a * b;
// });
// const CallbacksArrowFuntion = scr.map((a, b) => a * b);
// console.log(CallbacksNormalFuntion);
// console.log(CallbacksArrowFuntion);
// console.log(
//   `Both produce the same ans. the readability is the main part one is long and have to define funtion and it will take 3 lines  and the other one is one line and easy to read and work with it`,
// );

// Task 3.3 – Arrow Functions in Callbacks (Completed!)

// Section 4: Iterators & for..of
// Task 4.1 – Manual Iteration
// Create a custom iterable object and manually iterate over it using  for..of .
// The iterable should return a controlled sequence of values.
// Section 4: Iterators & for..of (started!)
// const aboutMeObject = {
//   name: "Hachiman",
//   Age: 19,
//   skills: ["Html", "css", "javascript", "react", "tailwindcss"],
//   [Symbol.iterator]: function () {
//     let aboutMeObject2 = {
//       name: this.name,
//       Age: this.Age,
//       Skills: this.skills,
//     };
//     let i = 0;
//     return {
//       next: function () {
//         i++;
//         return {
//           done: i > 1 && true,
//           value: `my name is ${aboutMeObject2.name} and my Age is ${aboutMeObject2.Age} and my skills are: ${aboutMeObject2.Skills}`,
//         };
//       },
//     };
//   },
// };
// for (const myValues of aboutMeObject) {
//   console.log(myValues);
// }
// Section 4: Iterators & for..of (Completed!)

// Task 4.2 – Comparing Loops
// Use the same data set and iterate using:
// for
// for..in
// for..of
// Log what each loop outputs and compare results
// Use the same data set and iterate using:
// Task 4.2 – Comparing Loops(started!)
// const newObjIterator = {
//   course: "Web & dev",
//   rollNo: 19303,
//   whatsLeft: ["Nextjs", "Nodejs", "Express"],
//   [Symbol.iterator]: function () {
//     let newObj = {
//       course: this.course,
//       rollNo: this.rollNo,
//       whatsLeftinCouse: this.whatsLeft,
//     };
//     let i = 0;
//     return {
//       next: function () {
//         i++;
//         return {
//           done: i > 1 && true,
//           value: `${newObj.course} ${newObj.rollNo} ${newObj.whatsLeftinCouse} `,
//         };
//       },
//     };
//   },
// };
// for (let i = 0; i < newObjIterator; i++) {
//   console.log(`for loop`, i);
// }
// for (const i of newObjIterator) {
//   console.log(`for of loop`, i);
// }
// for (const i2 in newObjIterator) {
//   console.log(`for in loop`, i2);
// }
// console.log(
//   "for loop doesnt work newObjIterator coz it will work with manual known values and the logic behind is i = 0 i < newObjIterator so it will be like this 0 < NAN so it become false and won't work\n and for of loop works correctly coz we told them to work like itrate over object and we know how the flow will work \n and for in loop worked but we only recevied key because it will read values",
// );

// Task 4.2 – Comparing Loops(Completed!)

// Task 4.3 – Real-World Iterator Usage
// Simulate a real-world scenario (e.g., queue, playlist, task list) and iterate over it using  for..of .
// Focus on clarity and structure.
// Task 4.3 – Real-World Iterator Usage (Started!)
const tasklist = {
  tasks: [
    { id: 1, task: "I need to make my body" },
    { id: 2, task: "I need to buy a new Laptop" },
    { id: 3, task: "I want to earn 10000's dollar" },
  ],
  [Symbol.iterator]: function () {
    let i = 0;
    let taskLists = this.tasks;
    return {
      next() {
        if (i < taskLists.length) {
          return {
            value: taskLists[i++],
            done: false,
          };
        }
        return {
          done: true,
          value: undefined,
        };
      },
    };
  },
};
for (const elem of tasklist) {
  console.log(`Task id:${elem.id} \n Task: ${elem.task}`);
}
console.log(
  `so what we did here we create a obj and inside that object we create array objec for tasks and we wrote [Symbol.iterator] and inside we create a variable name taskLists and access it through this.tasks and also we create a variable i for iteration and we went inside next function and add a conditon if a  i < tasklist.length well retun value: taskLists[i++] and done false so it will iterator till the last index starting from 0 and we  went outside of the conditon and return  done true and value null done is boolean and value is array of object  `,
);

// Task 4.3 – Real-World Iterator Usage (Completed!)
