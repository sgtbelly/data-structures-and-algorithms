'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }

  prepend(value) {

    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
  }

  append(value) {

    let node = new Node(value);

    // This happens if the list is empty
    if(! this.head) {
      this.head = node;
      return this;
    }

    // If we have stuff, need add to end
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;

  }

  .insertBefore(value, newVal) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
  }

  .insertAfter(value, newVal) {






  }



}

module.exports = LinkedList;