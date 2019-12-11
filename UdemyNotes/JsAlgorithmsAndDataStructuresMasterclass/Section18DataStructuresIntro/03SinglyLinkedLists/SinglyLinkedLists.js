class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(idx, val) {
    var foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return this.push(val);
    if (idx === 0) !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(idx - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
  }
}
console.log("Hey");

var list = new SinglyLinkedList();
list.push("HELLO SIR");
list.push("GOODDAY SIR");

//   traverse() {
//     var current = this.head;
//     while (current) {
//       console.log(current.val);
//       current = current.next;
//     }
//   }
// var first = new Node("Hi");
// first.next = new Node("there!");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");
