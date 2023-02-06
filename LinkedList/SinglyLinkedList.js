/**
 * A singly linked list is a linear data structure that consists of a sequence of nodes,
 * where each node stores a value and a reference (pointer) to the next node in the sequence.
 * The last node in the sequence points to null, indicating the end of the list.
 * The first node is typically referred to as the head,
 * and the ability to traverse the list only in one direction
 * (from head to tail) is what gives it the name "singly linked list."
 * This data structure can be used to implement dynamic arrays, stacks, and queues, among other data structures.
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // add element at the end of the list
  insert(element) {
    const node = new Node(element);

    // check if the list is empty
    // add the element and make it head
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      // loop breaks when the last node's next property is null
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  insertAt(element, index) {
    // check if the index is valid
    if (index < 0 || index > this.length) {
      return console.log("Please enter valid index");
    }
    const node = new Node(element);
    let current = this.head;
    let previous = null;

    // add the element to the first index
    if (index === 0) {
      node.next = current;
      this.head = node;
    } else {
      let count = 0;

      // iterate over the list to find the position to insert
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      // adding the element
      node.next = current;
      previous.next = node;
    }
    this.length++;
  }

  // removes the given element from the list
  remove(element) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.element === element) {
        // if previous is null means the element to be removed is head
        if (!previous) {
          // setting the next node as head
          this.head = current.next;
        } else {
          // previous node's next getting assigned the current next node
          previous.next = current.next;
        }
        this.length--;
        return current.element;
      }
      previous = current;
      current = current.next;
    }
    return null; // not found
  }

  removeFrom(index) {
    if (index < 0 || index > this.length) {
      return console.log("Please enter a valid index");
    }

    let current = this.head;
    let previous = null;

    if (index === 0) {
      this.head = current.next;
    } else {
      let count = 0;
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      // previous node's next getting assigned the current next node
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }

  indexOf(element) {
    let current = this.head;
    let count = 0;

    while (current) {
      // compare each element of the list with the given element
      if (current.element == element) {
        return count;
      }
      count++;
      current = current.next;
    }
    return null; // not found
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.element);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insert(20);
linkedList.insert(30);
linkedList.insert(40);
linkedList.printList();

const index = linkedList.indexOf(30);
if (index) {
  console.log(`Element is present at index: ${index}`);
} else {
  console.log("element not found");
}

const removeElement = linkedList.remove(40);
if (removeElement) {
  console.log(`Removed element is: ${removeElement}`);
} else {
  console.log("element not found");
}

linkedList.insertAt(50, 0);
linkedList.insertAt(60, 3);
linkedList.printList();

const removeFrom = linkedList.removeFrom(3);
if (removeFrom) {
  console.log(`Remove the element: ${removeFrom}`);
}

linkedList.printList();
