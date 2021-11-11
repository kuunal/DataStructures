import graph from "./graph.js";

const hasPath = (graph, source, destination)=>{
    if(!source || !graph || !destination ) return false;
    if(source === destination) return true;
    for(let child of graph[source]){
        if(hasPath(graph, child, destination)) return true;
    }
    return false;
}

console.log(hasPath(graph, 'g', 'e')); //false
console.log(hasPath(graph, 'b', 'e')); //false
console.log(hasPath(graph, 'a', 'e')); //true

