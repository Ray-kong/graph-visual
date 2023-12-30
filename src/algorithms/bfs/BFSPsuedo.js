const BFSPsuedo = `G = (V,E) is a graph
discovered[u] = 0 ∀u
Q is a queue
Q.enqueue(start)

while(Q is not empty)
    u = Q.dequeue()
    for((u, v) in E)
        if v is not visited
            Q.enqueue(v)
            discovered[v] = 1`;

export default BFSPsuedo;
