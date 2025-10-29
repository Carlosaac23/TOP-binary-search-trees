class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  // Takes an array of data and turns into BST (Balanced Binary Search Tree)
  buildTree(array) {
    if (array.length === 0) return null;

    // Clean array (Remove duplicates and order it)
    const noDuplicateArray = [...new Set(array)];
    const orderedArray = noDuplicateArray.sort((a, b) => a - b);

    // Get the mid index and root element
    const mid = Math.floor(orderedArray.length / 2);
    const root = orderedArray[mid];

    // Create left and right subtrees
    const leftSubtree = this.buildTree(orderedArray.slice(0, mid));
    const rightSubtree = this.buildTree(orderedArray.slice(mid + 1));

    return new Node(root, leftSubtree, rightSubtree);
  }

  // Insert the given value in the tree
  insert(value) {}

  // Delete the given value in the tree
  deleteItem(value) {}

  // Show tree in structured format
  prettyPrint(node, prefix = '', isLeft = true) {
    if (node === null) return;

    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '|  ' : '  '}`, false);
    }

    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}
