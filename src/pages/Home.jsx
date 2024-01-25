import React from "react";
import Overview from "../components/Overview";
import Footer from "../components/Footer";

function Home() {
  document.title = "Home | Graph Algorithm Visualizer";

  return (
    <>
      <div className="min-h-screen">
        <h1 className="text-white text-center text- text-2xl pt-10 pb-6">
          Welcome to the Graph Algorithm Visualizer!
        </h1>
        <div className="flex justify-center">
          <hr className="lg:w-4/5 w-full"></hr>
        </div>
        <div className="inline-grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  w-screen gap-x-10 justify-items-center">
          <Overview
            name="Depth-First Search"
            link="/dfs"
            image="dfs.PNG"
            search={true}
            greedy={true}
          />
          <Overview
            name="Breadth-First Search"
            link="/bfs"
            image="bfs.PNG"
            search={true}
            greedy={true}
          />
          <Overview
            name="Djikstra's Algorithm"
            link="/djikstras"
            image="soon.png"
            shortest={true}
            greedy={true}
          />
          <Overview
            name="Bellman-Ford Algorithm"
            link="/bellmanford"
            image="soon.png"
            shortest={true}
            dynamic={true}
          />
          <Overview
            name="Ford-Fulkerson Algorithm"
            link="/fordfulkerson"
            image="soon.png"
            network={true}
            greedy={true}
          />
          <Overview
            name="Prim's Algorithm"
            link="/prims"
            image="soon.png"
            mst={true}
            undirected={true}
            greedy={true}
          />
          <Overview
            name="Kruskal's Algorithm"
            link="/kruskals"
            image="soon.png"
            mst={true}
            undirected={true}
            greedy={true}
          />
          <Overview
            name="Connected Components"
            link="/connectedcomponents"
            image="soon.png"
            connected={true}
            undirected={true}
          />
          <Overview
            name="Strongly Connected Components"
            link="/stronglyconnectedcomponents"
            image="soon.png"
            connected={true}
            directed={true}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
