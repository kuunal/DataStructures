import nodes from "./tree.js";
const treeSum = root => { 
    if(root == null) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
}


console.log(treeSum(nodes.a)); // -> 21
