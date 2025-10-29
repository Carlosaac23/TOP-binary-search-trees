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
  delete(value) {
    this.root = this.#deleteNode(this.root, value);
  }

  #deleteNode(node, value) {
    if (node === null) return null;

    // Search the node to delete
    if (value < node.data) {
      node.left = this.#deleteNode(node.left, value);
      return node;
    } else if (value > node.data) {
      node.right = this.#deleteNode(node.right, value);
      return node;
    }

    // Node without children
    if (node.left === null && node.right === null) {
      return null;
    }

    // Node with one child
    if (node.left === null) {
      return node.right;
    }

    if (node.right === null) {
      return node.left;
    }

    // Node with two children
    // Find the successor
    let successor = node.right;
    while (successor !== null && successor.left !== null) {
      successor = successor.left;
    }

    // Change node data with successor data
    node.data = successor.data;
    node.right = this.#deleteNode(node.right, successor.data);
    return node;
  }

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
