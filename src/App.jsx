import CodeBlock from "./components/CodeBlock";
import Navbar from "./components/Navbar";
import cy from "./components/Graph.js";
import { useEffect, useState } from "react";
import { FaPlay, FaBackward, FaForward, FaPause } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import DFSCode from "./code_snippets/psuedocode/DFS.js";

function App() {
  useEffect(() => {
    cy();
  }, []);

  const [paused, setPaused] = useState(true);
  const [highlight, setHighlight] = useState("1-10");

  return (
    <>
      <Navbar />
      <h2 className="text-white font-bold text-2xl text-center pt-4">
        Depth-First Search
      </h2>
      <div className="flex flex-col lg:flex-row min-w-screen min-h-screen justify-center px-10 pt-6 gap-10">
        <div
          id="GraphContainer"
          className="bg-white h-[400px] w-[400px] rounded-lg shadow-md"
        ></div>
        <div className="min-w-[400px] max-w-[600px] flex flex-col">
          <CodeBlock
            highlight={highlight}
            code={DFSCode}
            language="JavaScript"
            showLineNumbers="true"
          />
          <div className="bg-gradient-to-r from-primary to-secondary flex flex-row justify-center items-center gap-4 p-2">
            <button onClick={""}>
              <GrPowerReset className="text-white" size={20}></GrPowerReset>
            </button>
            <button onClick={""}>
              <FaBackward className="text-white" size={15}></FaBackward>
            </button>
            {paused ? (
              <button
                onClick={() => {
                  setPaused(false);
                  setHighlight("4");
                }}
              >
                <FaPlay className="text-white" size={20}></FaPlay>
              </button>
            ) : (
              <button onClick={() => setPaused(true)}>
                <FaPause className="text-white" size={20}></FaPause>
              </button>
            )}
            <button onClick={""}>
              <FaForward className="text-white" size={15}></FaForward>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
