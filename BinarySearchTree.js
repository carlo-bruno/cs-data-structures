'use strict';

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * * Binary Search Tree Functions
   * ✅ insert(data)
   * ✅ remove(data)
   *
   * * Helper Functions
   * ✅ findMinNode(node)
   * ✅ findMaxNode(node)
   * ✅ getRootNode()
   *
   * * Tree Traversal
   * ✅ inorder(node)
   * ✅ preorder(node)
   * ✅ postorder(node)
   *
   * search(node,data)
   */

  insert(data) {
    let newNode = new TreeNode(data);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (!node) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }

      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (!node.left) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  findMaxNode(node) {
    if (!node.right) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }

  getRootNode() {
    return this.root;
  }

  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  search(node, data) {
    if (!node) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.rigth, data);
    } else {
      return node;
    }
  }
}

let bt = new BinarySearchTree();

bt.insert(7);
bt.insert(3);
bt.insert(13);
bt.insert(5);
bt.insert(10);
bt.insert(1);
bt.insert(65);
bt.insert(12);
bt.insert(32);
bt.insert(6);
bt.insert(70);

bt.remove(6);

let root = bt.getRootNode();

console.log('Inorder Traversal #############');
bt.inorder(root);

console.log('Preorder Traversal ############');
bt.preorder(root);

console.log('Postorder Traversal ###########');
bt.postorder(root);

console.log(bt.findMaxNode(root));
