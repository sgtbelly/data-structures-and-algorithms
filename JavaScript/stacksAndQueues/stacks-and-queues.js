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





const Node = require ('./node.js');

class Stack {
  let items = [];
  this.push = function(element){
    items.push(element);
  };

  this.pop = function(){
    return items.pop();
  };

  this.peek = function(){
    return items[items.length-1];
  };

  this.isEmpty = function(){
    return items.length == 0;

  };

  this.size = function(){
    return items.length;
  };

  this.clear = function(){
    items = [];
  };

  this.print = function(){
    console.log(items.toString());
  };
}

class Queue {
  let

this.front = function () {
  return items[0];
};

this.isEmpty = function () {
  return items.length == 0;
};

this.clear = function () {
  items = [];
};

this.size = function () {
  return items.length;
};

this.print = function () {
  console.log(items.toString());
}
};

