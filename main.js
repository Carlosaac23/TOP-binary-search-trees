class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    if (array.length === 0) return null;

    // Clean array (Remove duplicates and order it)
    const noDuplicateArray = [...new Set(array)];
    const orderedArray = noDuplicateArray.sort((a, b) => a - b);

    // Get the mid index and root element
    const mid = Math.floor(orderedArray.length / 2);
    const root = orderedArray[mid];

    // Create left and right arrays
    const leftArray = orderedArray.slice(0, mid);
    const rightArray = orderedArray.slice(mid + 1);

    // Create left and right trees
    const leftTree = this.buildTree(leftArray);
    const rightTree = this.buildTree(rightArray);

    return new Node(root, leftTree, rightTree);
  }

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

const myTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
myTree.prettyPrint();
