// FIFO - data structure. First-In-First-Out

let queue = [];

let temp = [];


class Queue {
  constructor(array) {
    this.array = array
  }

  enqueue() {
    for (let index = 0; index < this.array.length; index++) {
      queue[queue.length] = this.array[index];
    }
    console.log("queue", queue);
    console.log("-------------------------------------------------------------------------");
  }

  

  dequeue() {
    for (let index = 0; index < queue.length; index++) {
      if (index === 0) {
        temp[temp.length] = queue[0];
      }
      queue[index] = queue[index + 1];
    }
    queue.length = queue.length - 1;
  
    console.log("temp", temp);
    console.log("Dequeue", queue);
  }
}
const array = new Queue([66, 0, 5, 756, 87, 93, 543])

array.enqueue()

array.dequeue()
array.dequeue()


// function Enqueue(array) {
//   for (let index = 0; index < array.length; index++) {
//     Queue[Queue.length] = array[index];
//   }
//   console.log("queue", Queue);
// }

// Enqueue([66]);
// Enqueue([0]);
// Enqueue([5]);
// Enqueue([756]);
// Enqueue([87]);
// Enqueue([93]);
// Enqueue([543]);

// Enqueue(["eliot"])
// Enqueue(["John"])
// Enqueue(["Mick"])
// Enqueue(["Franck"])

// console.log(
//   "-------------------------------------------------------------------------"
// );

// let temp = [];

// function Dequeue() {
//   for (let index = 0; index < Queue.length; index++) {
//     if (index === 0) {
//       temp[temp.length] = Queue[0];
//     }
//     Queue[index] = Queue[index + 1];
//   }
//   Queue.length = Queue.length - 1;

//   console.log("temp", temp);
//   console.log("Dequeue", Queue);
// }

// Dequeue();
// Dequeue();
// Dequeue();
// Dequeue();
// Dequeue();
// Dequeue();
