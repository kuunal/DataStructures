import graph from './graph.js'

console.log("---------------------------Iterative approach----------------------------")
//Iterative approach
let dfs = (graph, source)=>{
    const stack = [ source ];

    while(stack.length){
        const current = stack.pop();
        console.log(current);

        for(let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }

}

dfs(graph, "a");

console.log("---------------------------Recursive approach----------------------------")
//Recursive approach
const dfsRecursive = (graph, source)=>{
    if(source === null || graph === null) return;
    console.log(source);
    for(let current of graph[source]){
        dfsRecursive(graph, current);
    }
}


dfsRecursive(graph, 'a');