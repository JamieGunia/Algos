//BUILDING A LINKED LIST
//BUILDING A NODE
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//BUILDING A LINKED LIST
//BUILDING THE LIST
class LinkedList {
  constructor() {
    this.head = null;
  }
}

//LINKED LIST METHODS
//AddFront()
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

  addBack(val){
    //create Node
    let new_node = new Node (val);
    let runner = this.head //start at head of list
    //move runner to last node in list
    while (runner.next !==null){
        runner=runner.next //move to next Node in line
    }
    //connect new Node to end of list
    runner.next = new_node;
  }

  //Remove first node and return data
  removeFront(){
    let nodeToRemove = this.head;
    if (nodeToRemove === null){
        return null;
    }
    this.head = this.head.next //move head of list down one Node
    nodeToRemove.next = null //disconnect the original first node from the list
    return nodeToRemove.data;
  }
}




//Iteratating through a Linked List
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
  findSum() {
    // Check if the linked list is empty
    if (!this.head) {
        return 0; // If the list is empty, return 0
    }
    //We first have to tell our train attendant that we want them to start at the front of the train
    let runner = this.head;
    let sum = 0; //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while //Also we need to tell them when to stop otherwise they will just run off the end of the train
    while (runner !== null) {
      //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
      sum += runner.data; //Tell our attendant to move to the next car
      runner = runner.next;
    }
    return sum;
  }

      // Method to get the length of the linked list
      length() {
        let count = 0;
        let current = this.head; // Start from the head of the list

        // Iterate through the list and count nodes
        while (current !== null) {
            count++; // Increment count for each node
            current = current.next; // Move to the next node
        }

        return count; // Return the count
    }
}

