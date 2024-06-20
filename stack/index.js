let stack = [];

class Stack {
  constructor (array) {
    this.array = array
  }

  push() {
    let arrayLength = []
    for (let index = 0; index < this.array.length; index++) {
      stack[stack.length] = this.array[index];
      arrayLength = this.array.length;
    }
    // return arrayLength;
    console.log(arrayLength);
  }

  pop() {
    let lastElement = []
    for (let index = stack.length; index <= stack.length; index++) {
          if (stack[stack.length - 1]) {
            lastElement = stack[stack.length - 1];
            stack.length = stack.length - 1;
          } else if ((stack.length = 0)) {
            stack[stack.length - 1] = null;
            console.log("no element in the array");
          }
        }
        // return lastElement;
        console.log(lastElement);
  }

  peek() {
    let peek = stack[stack.length - 1];
    // return peek;
    console.log(peek);
  }
}

const array = new Stack([1, 4, 22, 67, 32, 11, 90])

array.push()

array.pop()

array.peek()

//------------------------------------------------------------//

// function Pop() {
//   for (let index = stack.length; index <= stack.length; index++) {
//     if (stack[stack.length - 1]) {
//       lastElement = stack[stack.length - 1];
//       stack.length = stack.length - 1;
//     } else if ((stack.length = 0)) {
//       stack[stack.length - 1] = null;
//       console.log("no element in the array");
//     }
//   }
//   return lastElement;
// }

// console.log("pop", Pop());
// console.log("pop", stack);

// //------------------------------------------------------------//

// function Peek() {
//   let peek = stack[stack.length - 1];
//   return peek;
// }

// console.log("peek", Peek());
