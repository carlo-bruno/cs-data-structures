'use strict';

class HashTable {
  constructor(size = 128) {
    this.table = new Array(size);
  }

  /**
   * incomplete
   */

  computeHash(str) {
    let hash = 0;
    if (!str.length) return hash;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash;
      hash = hash + str.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash % this.table.length);
  }

  printTable() {
    this.table.forEach((i) => console.log(i));
  }

  //
  insert(value) {
    let hashIndex = this.computeHash(value);
    hashIndex;
    this.table[hashIndex] = value;
  }
}

const ht = new HashTable(10);
ht;

ht.insert('hello');
ht.insert('hi');
ht.insert('ha');
ht.insert('helld');

ht;
