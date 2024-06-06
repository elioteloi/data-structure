// FIFO - data structure. First-In-First-Out

let Queue = [];

let temp = [];


class queue {
  constructor(array) {
    this.array = array
  }

  Enqueue() {
    for (let index = 0; index < this.array.length; index++) {
      Queue[Queue.length] = this.array[index];
    }
    console.log("queue", Queue);
    console.log("-------------------------------------------------------------------------");
  }

  

  Dequeue() {
    for (let index = 0; index < Queue.length; index++) {
      if (index === 0) {
        temp[temp.length] = Queue[0];
      }
      Queue[index] = Queue[index + 1];
    }
    Queue.length = Queue.length - 1;
  
    console.log("temp", temp);
    console.log("Dequeue", Queue);
  }
}
const array = new queue([66, 0, 5, 756, 87, 93, 543])

array.Enqueue()

array.Dequeue()
array.Dequeue()


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
