'use strict';

const Node = require('./node.js');

class LinkedList {

  constructor() {
    this.head = null;
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

  getKthFromEnd(n) {
    let offset = this.head;
    let k = this.head;

    for( let i=0; i++ ) {
      offset = offset.next
    }

    while(offset.next) {
      offset = offset.next;
      k = k.next;
    }

    return k;
  }



}

module.exports = LinkedList;