// every time you visit a new node
    // pick the node with the smallest known distance to visit first
    // look at the neighbors
    // calculate the distance between neighbors and smallest
        // sum the total edges
    // if the new total distance is less than the previous total, store that distance
// This will give us a data structure with the shortest path to all nodes
    // not used the ones you are trying to calculate

function dijkstra(start, end){
    // takes in starting and ending vertex
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let smallest 

    for (let vertex in this.adjacencyList){
        // add each vertex with a priority of infinity to the priority queue
            // except for start = 0 
        // set each key to be every vertex in the adjacency list with a value of infinity
            // except for the starting vertex = 0
        if (vertex === start) {
            distances[vertex] = 0
            nodes.enqueue(vertex, 0)
        } else {
            distances[vertex] = Infinity
            nodes.enqueue(vertex, Infinity)
        }
        previous[vertex] = null
        // set keys to be every vertex in adjacency list with a value of null
    }

    while (nodes.values.length){
    // start looping as long as anything is in the priority queue
        smallest = nodes.dequeue().val
        // dequeue a vertex 
        if (smallest === end){
            // if that vertex is the same as the ending vertex, done
        }

        if (smallest || distances[smallest] !== Infinity){
        // otherwise loop through the adjacency list at that vertex
            for (let neighbor in this.adjacencyList[smallest]){
                let nextNode = this.adjacencyList[smallest][neighbor]
                let candidate = distances[smallest] + nextNode.weight
                let nextNeighbor = nextNode.node
                // calculate the distance to that vertex from the starting vertex
                if (candidate < distances[nextNeighbor]){
                // if the distance is less that what is currently stored
                    distances[nextNeighbor] = candidate
                    // update the distance
                    previous[nextNeighbor] = smallest
                    // update the previous object
                    nodes.enqueue(nextNeighbor, candidate)
                    // enqueue the vertex with the total distance from the start node
                }
            }
        }
    }
}   