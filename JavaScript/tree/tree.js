'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    }

    const _insert = node => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _insert(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _insert(node.right);
        }
      } else {
        return null;
      }
    };

    _insert(node);
  }


  preOrder(value) {
    const node = this.root;
    if(node != null){
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    const node = this.root;
    if(node != null){
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  inOrder(node) {
    const node = this.root;
    if(node !== null){
      this.inOrder(node.left);
      console.log(node.value)
      this.inOrder(node.right)
    }
  }

  levelOrder() {
    let results = [];
    let nodeQueue = [];

    nodeQueue.push(this.root);

    while (nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if (current.left) {
        nodeQueue.push(current.left);
      }
      if (current.right) {
        nodeQueue.push(current.right);
      }
    }
    return results;
  }
}
class BinarySearchTree{
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    }

    const _insert = node => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _insert(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _insert(node.right);
        }
      } else {
        return null;
      }
    };

    _insert(node);
  }

  // search for a node with given data
  search(node, data)
  {
    // if trees is empty return null
    if(node === null)
      return null;

    // if data is less than node's data
    // move left
    else if(data < node.data)
      return this.search(node.left, data);

    // if data is less than node's data
    // move left
    else if(data > node.data)
      return this.search(node.right, data);

    // if data is equal to the node data
    // return node
    else
      return node;
  }

}

let tree = new BinaryTree();
let bsTree = new BinarySearchTree();
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 42, 35, 46, 57, 68, 79, 100];
values.map(val => tree.insert(val));

console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
console.log(tree.levelOrder());
console.log(bsTree.add());
console.log(bsTree.search());

