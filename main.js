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
