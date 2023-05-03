class PriorityQueue{
    constructor(){
        this.values = []
    }

    enqueue(val, priority){
        this.values.push({val, priority})
        this.sort()
    }
    
    dequeue(){
        // returns smallest value
        return this.values.shift()
    }

    sort(){
        this.values.sort((a, b) => a.priority - b.priority)
    }

    // because we are sorting it is O(N * log(N))
    // this is very basic and not the most efficient 
    // see binary heap for a better version
}