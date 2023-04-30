class WeightedGraph {
    constructor(){
        this.adjacencyList = {}
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1, v2, weight){
        this.adjacencyList[v1].push({node: v2, weight})
        this.adjacencyList[v2].push({node: v1, weight})
    }
}

{
    "A": [{node: "B", weight: 10}]
    // essentially the weight is the distance between to vertices 
}