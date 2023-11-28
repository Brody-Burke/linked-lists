class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head=null, length=0) {
    this.head = head;
    this.length = length;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      const oldHead = this.head;
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++
  }

  addToTail(val) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
