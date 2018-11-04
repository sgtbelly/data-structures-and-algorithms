'use strict';

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

