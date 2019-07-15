'use strict';

class TrieNode {
  constructor(letter = '') {
    this.value = letter;
    this.children = {};
    this.completesString = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    //
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      let letter = word[i];

      if (!current.children[letter]) {
        current.children[letter] = new TrieNode(letter);
      }
      current = current.children[letter];
      if (i === word.length - 1) current.completesString = true;
    }
  }

  find(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (current.children[letter]) {
        current = current.children[letter];
      } else {
        return false;
      }
    }
    return current.completesString;
  }

  remove(word) {
    //
  }
}

const trie = new Trie();

trie.insert('star');
trie.insert('start');
trie.insert('stars');
trie.insert('starts');
console.log(trie.find('stad'));

trie;
