import nodes from './tree.js'

const findMin = values => Math.min(...values);

const treeMinValue = (root, min) =>{
    if(root === null) return 999;
    return findMin([root.val, treeMinValue(root.left, min),  treeMinValue(root.right, min)]);
}


console.log(treeMinValue(nodes.a, 999));