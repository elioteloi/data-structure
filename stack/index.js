let stack = [];

// class Stack {
//   constructor(array, stack) {
//     this.array = array;
//     this.stack = stack;
//   }

//   push() {
//     for (let index = 0; index < array.length; index++) {
//       this.stack[stack.length] = this.array[index];
//       arrayLength = this.array.length;
//     }
//     return arrayLength;
//   }

//   pop() {
//     for (let index = stack.length; index <= stack.length; index++) {
//       if (this.stack[stack.length - 1]) {
//         lastElement = this.stack[stack.length - 1];
//         this.stack.length = this.stack.length - 1;
//       } else if ((this.stack.length = 0)) {
//         this.stack[this.stack.length - 1] = null;
//         console.log("no element in the array");
//       }
//     }
//     return lastElement;
//   }

//   peek() {
//     let peek = stack[stack.length - 1];
//     return peek;
//   }
// }

// let array = new Stack([1, 4, 22, 67, 32, 11, 90]);

// console.log("push", array.push());

// console.log("pop", array.pop());

// console.log("peek", array.peek());

function Push(array) {
  for (let index = 0; index < array.length; index++) {
    stack[stack.length] = array[index];
    arrayLength = array.length;
  }
  return arrayLength;
}

// console.log(stack);

console.log("push", Push([1, 4, 22, 67, 32, 11, 90]));

Push([41]);

Push([252]);

Push([47]);

Push([97]);

Push([27]);

console.log(Push([64]));

//------------------------------------------------------------//

function Pop() {
  for (let index = stack.length; index <= stack.length; index++) {
    if (stack[stack.length - 1]) {
      lastElement = stack[stack.length - 1];
      stack.length = stack.length - 1;
    } else if ((stack.length = 0)) {
      stack[stack.length - 1] = null;
      console.log("no element in the array");
    }
  }
  return lastElement;
}

console.log("pop", Pop());
console.log("pop", stack);

//------------------------------------------------------------//

function Peek() {
  let peek = stack[stack.length - 1];
  return peek;
}

console.log("peek", Peek());
