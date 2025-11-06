import { Tree } from './bst.js';

const numbers = [1, 5, 4, 8, 10, 15, 20, 21, 19, 17];
const myTree = new Tree(numbers);
myTree.prettyPrint(myTree.root);

// Insert a value
myTree.insert(2);
myTree.prettyPrint(myTree.root);

// Delete a value
myTree.delete(2);
myTree.prettyPrint(myTree.root);

// Find a node
const node4 = myTree.find(4);
myTree.prettyPrint(node4);

// Testing levelOrderForEach method
const levelOrderNodes = [];
myTree.levelOrderForEach(node => levelOrderNodes.push(node.data));
console.log(levelOrderNodes); // [ 70, 66, 95, 43, 69, 78, 96, 19, 77 ]

// Counting nodes
let count = 0;
myTree.levelOrderForEach(node => count++);
console.log(`Total nodes: ${count}`); // 10

// Testing inOrderForEach method
const inOrderNodes = [];
myTree.inOrderForEach(node => inOrderNodes.push(node.data));
console.log(inOrderNodes);

// Testing preOrderForEach method
const preOrderNodes = [];
myTree.preOrderForEach(node => preOrderNodes.push(node.data));
console.log(preOrderNodes);

// Testing postOrderForEach method
const postOrderNodes = [];
myTree.postOrderForEach(node => postOrderNodes.push(node.data));
console.log(postOrderNodes);

// Return the height of a given value
console.log(myTree.height(1)); // 0
console.log(myTree.height(5)); // 2

// Return the depth of a given value
console.log(myTree.depth(19)); // 2
console.log(myTree.depth(1)); // 3
console.log(myTree.depth(15)); // 0
