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

    // Change node data with successor data and delete right subtree successor
    node.data = successor.data;
    node.right = this.#deleteNode(node.right, successor.data);
    return node;
  }

  // Return the node with the given value
  find(value) {
    if (!value) return null;
    return this.#findNode(this.root, value);
  }

  #findNode(node, value) {
    if (node === null) return null;

    if (value === node.data) {
      return node;
    } else if (value < node.data) {
      return this.#findNode(node.left, value);
    } else {
      return this.#findNode(node.right, value);
    }
  }

  // Method that accepts a callback
  levelOrderForEach(callback) {
    if (!callback) throw new Error('A callback is required');
    if (this.root === null) return;

    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  inOrderForEach(callback) {
    if (!callback) throw new Error('A callback is required');
    if (this.root === null) return;

    const stack = [];
    let node = this.root;

    while (node || stack.length > 0) {
      while (node !== null) {
        stack.push(node);
        node = node.left;
      }

      node = stack.pop();
      callback(node);
      node = node.right;
    }
  }

  preOrderForEach(callback) {
    if (!callback) throw new Error('A callback is required');
    if (this.root === null) return;

    const stack = [];
    let node = this.root;
    stack.push(node);

    while (stack.length > 0) {
      node = stack.pop();
      callback(node);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }

  postOrderForEach(callback) {
    if (!this.root) return;

    const stack1 = [];
    const stack2 = [];
    stack1.push(this.root);

    while (stack1.length > 0) {
      const node = stack1.pop();
      stack2.push(node);

      if (node.left) stack1.push(node.left);
      if (node.right) stack1.push(node.right);
    }

    while (stack2.length > 0) {
      const node = stack2.pop();
      callback(node);
    }
  }

  // Return the height of the node containing the given value
  height(value) {
    if (!value) return null;

    // Search the given node in levelOrder
    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      if (node.data === value) {
        return this.#getHeight(node);
      }

      // Otherwise...
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  #getHeight(node) {
    if (node === null) return -1;
    const leftHeight = this.#getHeight(node.left);
    const rightHeight = this.#getHeight(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  // Return the depth of the node containing the given value
depth(value) {
    console.log('Hey');
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
