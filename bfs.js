import graph from "./graph.js";

const bfs = (graph, source)=>{
    const queue = [ source ];

    while(queue.length){
        const current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}

bfs(graph, 'a');

