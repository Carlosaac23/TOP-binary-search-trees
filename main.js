import { Tree } from './bst.js';

const myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
myTree.prettyPrint(myTree.root);

// Insert a value
myTree.insert(2);
myTree.prettyPrint(myTree.root);
