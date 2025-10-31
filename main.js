import { Tree } from './bst.js';
import createArrayWithRandomNumbers from './helpers/randomNumbers.js';

const SIZE = 10;
const myTree = new Tree(createArrayWithRandomNumbers(SIZE));
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
// Show every node
myTree.levelOrderForEach(node => console.log(node.data)); // 70, 66, 95, 43, 69, 78, 96, 19, 77

// Save nodes in an array
const nodes = [];
myTree.levelOrderForEach(node => nodes.push(node.data));
console.log(nodes); // [ 70, 66, 95, 43, 69, 78, 96, 19, 77 ]

// Counting nodes
let count = 0;
myTree.levelOrderForEach(node => count++);
console.log(count); // 10
