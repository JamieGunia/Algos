class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addFront(val) {
    // Creating a new node object with the value provided
    let new_node = new Node(val); // Checking to see if the current list does not have a head node (if the list is empty) // If the list is empty, place the new node as the head
    if (!this.head) {
      this.head = new_node;
      return this;
    } // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
    new_node.next = this.head; // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
    this.head = new_node;
    return this;
  }

  display() {
    // let result = " ";
    let runner = this.head; // Start from the head of the list

    // Iterate through the list and concatenate node values into a string
    while (runner !== null) {
      console.log(runner.data); //print the data in the current node
      //move to next node
      runner=runner.next
    }
  }
}

SLL1 = new LinkedList();
console.log(SLL1.addFront(76));
console.log(SLL1.addFront(2));
console.log(SLL1.display());
console.log(SLL1.addFront(11.41));
console.log(SLL1.display());
