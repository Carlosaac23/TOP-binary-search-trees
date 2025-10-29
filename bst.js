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
    const root = new Node(orderedArray[mid]);

    // Create left and right subtrees
    root.left = this.buildTree(orderedArray.slice(0, mid));
    root.right = this.buildTree(orderedArray.slice(mid + 1));

    return root;
  }

  // Insert the given value in the tree
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this.#insertNode(this.root, value);
    }
  }

  #insertNode(node, value) {
    if (node === null) return new Node(value);

    if (value < node.data) {
      node.left = this.#insertNode(node.left, value);
    } else {
      node.right = this.#insertNode(node.right, value);
    }

    return node;
  }

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
