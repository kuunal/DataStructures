import nodes from './tree.js'

//a->b->c->d
//d->c->b->a

const maxSumPath = (root) => {
    if(root === null) return 0; 
    
    return root.val + Math.max(...[maxSumPath(root.left), maxSumPath(root.right)]);
};

console.log(maxSumPath(nodes.a));