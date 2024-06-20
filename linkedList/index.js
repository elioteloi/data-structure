
class Node {
    constructor(node, next) {
        this.node = node,
        this.next = next
    }

    display() {
        console.log(`node ${this.node}, next ${this.next}`);
    }
}

let temp


class LinkedList {
    constructor(head) {
        this.head = head || null
    }
    add(node) {
        if(this.head === null) {
            temp = node
            console.log(`Head: ${node}`);
           this.head = new Node(node, temp)
        } else if (this.head !== null) {

            console.log("head temp",temp);

            let newNode = new Node(temp, node)
            temp = node 

            newNode.display()
        }
    }

    display() {
        console.log(`Node: ${this.node}, Next: ${this.next}`);
    }
}

let list = new LinkedList()

list.add(1)
list.add(2)
list.add(452)
list.add(33)