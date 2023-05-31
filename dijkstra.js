// every time you visit a new node
    // pick the node with the smallest known distance to visit first
    // look at the neighbors
    // calculate the distance between neighbors and smallest
        // sum the total edges
    // if the new total distance is less than the previous total, store that distance
// This will give us a data structure with the shortest path to all nodes
    // not used the ones you are trying to calculate

function dijkstra(start, end)
    // takes in starting and ending vertex
    const nodes = new PriorityQueue()
    // add each vertex with a priority of infinity to the priority queue
        // except for start = 0 
    // create an object called distances
        // set each key to be every vertex in the adjacency list with a value of infinity
            // except for the starting vertex = 0
    const distances = {}
    // create another object called previous
        // set keys to be every vertex in adjacency list with a value of null
    const previous = {}
    // start looping as long as anything is in the priority queue
        // dequeue a vertex 
        // if that vertex is the same as the ending vertex, done
        // otherwise loop through the adjacency list at that vertex
            // calculate the distance to that vertex from the starting vertex
            // if the distance is less that what is currently stored
                // update the distance
                // update the previous object
                // enqueue the vertex with the total distance from the start node
    