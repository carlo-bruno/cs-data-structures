'use strict';

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * @method printList() -> print each data in one line, separated by -
   * @method size() -> returns the number of elements in the list
   * @method add(data) -> adds `new Node(data)` to the end of the LinkedList
   * @method remove(index) -> cut off node at index, reroute prev.next, delete head if index is omitted
   * @method insert(data,index) -> insert `new Node(data)` at index
   *
   * TODO: search(value) || indexOf(value) -> returns index of value, -1 if not found
   * TODO: clear() -> removes all of the elements from list
   */

  printList() {
    let current = this.head;

    if (!current) {
      return `Empty`;
    } else {
      let values = `List: `;
      values += current.data;

      while (current.next) {
        current = current.next;
        values += `-${current.data}`;
      }
      return values;
    }
  }

  size() {
    let current = this.head;
    let sizeCounter = 0;

    if (current) {
      sizeCounter++;
      while (current.next) {
        sizeCounter++;
        current = current.next;
      }
    }
    return sizeCounter;
  }

  add(data) {
    if (!this.head) {
      this.head = new ListNode(data);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(data);
    }
  }

  remove(index) {
    let current = this.head;
    let counter = 0;

    if (!current) {
      return;
    } else if (!index) {
      this.head = current.next;
      current.data = null;
      current.next = null;
    } else {
      let prev;
      while (counter < index && current.next) {
        prev = current;
        current = current.next;
        counter++;
      }
      if (index > counter) {
        return;
      }
      prev.next = current.next;
      current.data = null;
      current.next = null;
    }
  }

  clear() {
    let current = this.head;

    if (!current) {
      return `Empty`;
    } else {
      let prev;
      while (!current.next) {
        prev = current;
        current = current.next;
        prev.data = null;
        prev.next = null;
      }
      current.data = null;
    }
  }

  insert(data, index) {
    let counter = 0;
    let current = this.head;
    let newNode = new ListNode(data);

    if (!this.head || !index) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      while (current.next && counter < index - 1) {
        current = current.next;
        counter++;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }
}

let ll = new LinkedList();

console.log(ll.size());
ll.add('zero');
ll.add('one');
ll.add('two');
ll.add('three');
ll.add('four');
ll.add('five');
ll.add('six');
ll.add('seven');

ll.insert('inserted', 0);
ll.insert('|five|', 5);

ll.remove(6);
ll.remove(1);

ll.remove();

console.log(ll.printList());

console.log(ll.size());
ll.clear();
console.log(ll.size());
