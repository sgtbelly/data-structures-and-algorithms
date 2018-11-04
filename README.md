# Insert and shift middle index of array
<!-- Short summary or background information -->
Insr and shift an array in middle at index
## Challenge
<!-- Description of the challenge -->
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
## Solution
<!-- Embedded whiteboard image --># data-structures-and-algorithms
![array_shift](./Assets/array_shift.jpg)<br />

#
#

# Binary Search
<!-- Short summary or background information -->
Binary search in a sorted 1D array

## Challenge
<!-- Description of the challenge -->
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Solution
<!-- Embedded whiteboard image -->
![arrar_binary_search](./Assets/array_binary_search.jpeg)<br />

#
#

# Stacks and Queues
<!-- Short summary or background information -->
Lab 10: Stacks and Queues
Implement a Stack and a Queue Data Structure

## Challenge
<!-- Description of the challenge -->
Create a Node class that has properties for the value stored in the Node, and a pointer to the next node
Create a Stack class that has a top property. It creates an empty Stack when instantiated.
This object should be aware of a default empty value assigned to top when the stack is created.
Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node.
Define a method called peek that does not take an argument and returns the node located on the top of the stack.
Create a Queue class that has a top property. It creates an empty queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node.
Define a method called peek that does not take an argument and returns the node located in the front of the stack.
At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
Be sure to follow your languages best practices for naming conventions.

## API
<!-- Description of each method publicly available to your Stack and Queue-->
Stack:

  push() - adds an element to the stack

  pop() - removes an element from the stack, if the function is call on an empty stack it indicates "Empty"

  peek() - returns the top most elements in the stack, but does not delete it.

  isEmpty() - return true if the stack is empty

  printStack() - returns a sting in which all the element of a stack is concatenated
 

Queue:

  enqueue() - adds an element to the queue

  dequeue() - removes an element from the front of the queue

  front() -  returns the front element of the queue

  isEmpty() - Returns true if th queue is empty
  
  printQueue() - returns all elements of the queue