'use strict';

class DListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @method printList
   * @method add(data)
   * @method insertAt(data,index)
   *
   * TODO: remove(data)
   * TODO:
   *
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

  add(data) {
    let node = new DListNode(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertAt(data, index) {
    let node = new DListNode(data);
    let current = this.head;
    let counter = 0;

    if (!this.head || !index) {
      node.next = this.head;
      this.head = node;
    } else {
      while (current.next && counter < index - 1) {
        current = current.next;
        counter++;
      }
      if (current.next) current.next.prev = node;
      else this.tail = node;
      node.next = current.next;
      current.next = node;
      node.prev = current;
    }
  }
}

let dl = new DoublyLinkedList();

dl.add(1);
dl.add(1);
dl.add(1);
dl.add(1);
dl.add('T');

dl.insertAt('X', 44);

console.log(dl.printList());
