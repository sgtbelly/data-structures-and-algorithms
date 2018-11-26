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


  preOrder() {
    let results = [];
    let _walk = node => {
      results.push(node.value);
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let _walk = node => {
      if (node.left) {
        _walk(node.left);
      }
      results.push(node.value);
      if (node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
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

  BreadthFirst() {

    while(!nodeQueue.isEmpty()) {
      let current = nodeQueue.dequeue();
      callbacks.enterNode(current);

      if (current.left && callbacks.allowTraversal(current, current.left)) {
        nodeQueue.enqueue(current.left);
      }

      if (current.right && callbacks.allowTraversal(current, current.right)) {
        nodeQueuee.enqueue(current.right);
      }

      callbacks.leaveNode(current);
    }

  }

  findMaxValue() {

    if (!node){
      return 0;
    }
    if (node.right){
      return maxNode(node.right);
    }
    if (node.left){
      return maxNode(node.left);
    }
    return node.value;
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

class BFTraversal(function (value, depth)
return value % 2;
})	 // This function should return [1, 3, 5, 7]

class BFTraversal(function (value, depth) {
  return depth === 1;
})	// This function should return [2, 3]
}

let tree = new BinaryTree();
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 42, 35, 46, 57, 68, 79, 100];
values.map(val => tree.insert(val));

console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
console.log(tree.levelOrder());
console.log(tree.findMaxValue());
console.log(tree.BreadthFirst());

import superagent;
