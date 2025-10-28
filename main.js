class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = buildTree([]);
  }

  buildTree(array) {}

  prettyPrint(node, prefix = '', isLeft = true) {
    if (node === nul) return;

    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '|  ' : '  '}`, false);
    }

    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}
