'use strict';

const node = require ('../lib/node.js');


class Node  {

}

class Stack {

  constructor() {
    this.items = [];
  };

  push(element) {
    this.items.push(element)
  };

  pop(){
    if (this.items.length == 0)
      return 'Empty';
    return this.items.pop();
  }

  peek(){
    return this.items[this.items.length -1];
  }

  isEmpty(){
    return this.items.length == 0;
  }

  printStack(){
    var str = '';
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i] + '';
    return str;
  }


}

class Queue{
  constructor() {
    this.items = [];
  }

  enqueue(element){
    this.items.push(element);
  }

  dequeue() {
    if(this.isEmpty())
      return 'Empty';
    return this.items.shift();
  }

  front(){
    if(this.isEmpty())
      return 'Queue is Empty';
    return this.items[0];
  }

  isEmpty(){
    return this.items.length == 0;
  }

  printQueue(){
    var str = '';
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i] +'';
    return str;
  }





}