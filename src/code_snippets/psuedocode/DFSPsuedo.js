const DFSPsuedo = `G = (V,E) is a graph
discovered[u] = 0 ∀u

DFS(u):
  discovered[u] = 1
  for ((u,v) in E):
    if (discovered[v]=0):
      parent[v] = u
      DFS(v)
)`;

export default DFSPsuedo;
