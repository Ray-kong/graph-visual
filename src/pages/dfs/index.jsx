import React, { useEffect, useState, useRef } from "react";
import DFSGraph from "./Graph.js";
import { FaPlay, FaBackward, FaForward, FaPause } from "react-icons/fa";
import CodeBlock from "../../components/CodeBlock";
import DFSPsuedo from "./Psuedo.js";

function DFS() {
  document.title = "DFS | Graph Algorithm Visualizer";

  useEffect(() => {
    DFSGraph();
  }, []);

  const [paused, setPaused] = useState(true);
  const [highlight, setHighlight] = useState("1"); // does not want to hard code this but is there a better way?
  //The useRef Hook allows you to persist values between renders.
  // It can be used to store a mutable value that does not cause a re-render when updated.
  const intervalIdRef = useRef(null);
  const highlightRef = useRef(highlight);
  const totalLines = 10; // Total number of lines in the code snippet

  const updateHighlight = (newHighlight) => {
    setHighlight(newHighlight);
    highlightRef.current = newHighlight;
  };

  const highlightBackward = () => {
    updateHighlight(Math.max(1, parseInt(highlightRef.current) - 1).toString());
  };

  const highlightForward = () => {
    updateHighlight(
      Math.min(totalLines, parseInt(highlightRef.current) + 1).toString()
    );
  };

  const startHighlighting = () => {
    setPaused(false);
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = setInterval(() => {
      let nextHighlight = parseInt(highlightRef.current) + 1;
      if (nextHighlight > totalLines) {
        clearInterval(intervalIdRef.current);
      } else {
        updateHighlight(nextHighlight.toString());
      }
    }, 1000); // Move to next line every second
  };

  const stopHighlighting = () => {
    setPaused(true);
    clearInterval(intervalIdRef.current);
  };

  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return (
    <>
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
            code={DFSPsuedo}
            language="Text"
            showLineNumbers={true}
          />
          <div className="bg-gradient-to-r from-primary to-secondary flex flex-row justify-center items-center gap-4 p-2">
            <button onClick={highlightBackward}>
              <FaBackward className="text-white" size={15}></FaBackward>
            </button>
            {paused ? (
              <button onClick={startHighlighting}>
                <FaPlay className="text-white" size={20}></FaPlay>
              </button>
            ) : (
              <button onClick={stopHighlighting}>
                <FaPause className="text-white" size={20}></FaPause>
              </button>
            )}
            <button onClick={highlightForward}>
              <FaForward className="text-white" size={15}></FaForward>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DFS;
