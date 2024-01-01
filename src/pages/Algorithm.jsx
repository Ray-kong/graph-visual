import React, { useEffect, useState } from "react";
import { FaPlay, FaForward, FaPause, FaPlus, FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import CodeBlock from "../components/CodeBlock.jsx";
import DFSAlgorithm from "../algorithms/dfs/DFSAlgorithm.js";
import BFSAlgorithm from "../algorithms/bfs/BFSAlgorithm.js";
import DjikstraAlgorithm from "../algorithms/djikstra/DjikstraAlgorithm.js";
import PrimsAlgorithm from "../algorithms/prims/PrimsAlgorithm.js";
import Description from "../components/Description.jsx";
import KruskalsAlgorithm from "../algorithms/kruskals/KruskalsAlgorithm.js";

function Algorithm(props) {
  const [algorithm, setAlgorithm] = useState(null);
  const [paused, setPaused] = useState(true);
  const [speed, setSpeed] = useState(1000);
  const [play, setPlay] = useState(null);
  const [highlight, setHighlight] = useState(null);

  useEffect(() => {
    reset();
  }, []);

  function chooseAlgorithm() {
    switch (props.algorithm) {
      case "dfs":
        setAlgorithm(new DFSAlgorithm());
        break;
      case "bfs":
        setAlgorithm(new BFSAlgorithm());
        break;
      case "djikstra":
        setAlgorithm(new DjikstraAlgorithm());
        break;
      case "prims":
        setAlgorithm(new PrimsAlgorithm());
        break;
      case "kruskals":
        setAlgorithm(new KruskalsAlgorithm());
        break;
    }
  }

  function reset() {
    setHighlight(props.highlight);
    chooseAlgorithm();
    stopInterval();
  }

  function startInterval() {
    setPaused(false);
    setPlay(
      setInterval(() => {
        if (algorithm.finished()) {
          stopInterval();
        } else {
          algorithm.next();
          setHighlight(algorithm.lineToHighlight());
        }
      }, speed)
    );
  }

  function stopInterval() {
    if (play) {
      clearInterval(play);
      setPaused(true);
    }
  }

  function speedUp() {
    if (speed > 500) {
      setSpeed(speed - 100);
    }
    if (!paused) {
      stopInterval();
      startInterval();
    }
  }

  function slowDown() {
    if (speed < 3000) {
      setSpeed(speed + 100);
    }
    if (!paused) {
      stopInterval();
      startInterval();
    }
  }

  return (
    <>
      <h2 className="text-white font-bold text-2xl text-center pt-4">
        {props.name}
      </h2>
      <div className="min-w-screen min-h-screen m-auto w-3/4 lg:w-1/2 items-center justify-center pt-6">
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div
            id="GraphContainer"
            className="bg-white h-[400px] w-[400px] rounded-lg shadow-md"
          ></div>
          <div className="min-w-[400px] max-w-[600px] flex flex-col">
            <CodeBlock
              highlight={highlight}
              code={props.code}
              language="Text"
              showLineNumbers={true}
            />
            <div className="bg-gradient-to-r from-primary to-secondary flex flex-row justify-center items-center gap-4 p-2">
              <button onClick={() => reset()}>
                <GrPowerReset className="text-white" size={20}></GrPowerReset>
              </button>
              <button onClick={() => slowDown()}>
                <FaMinus className="text-white" size={15}></FaMinus>
              </button>
              {paused ? (
                <button onClick={() => startInterval()}>
                  <FaPlay className="text-white" size={20}></FaPlay>
                </button>
              ) : (
                <button
                  onClick={() => {
                    stopInterval();
                  }}
                >
                  <FaPause className="text-white" size={20}></FaPause>
                </button>
              )}
              <button onClick={() => speedUp()}>
                <FaPlus className="text-white" size={15}></FaPlus>
              </button>
              {paused ? (
                <button
                  onClick={() => {
                    if (paused) {
                      algorithm.next();
                    }
                  }}
                >
                  <FaForward className="text-white" size={15}></FaForward>
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <Description
          name={props.name}
          runtime={props.runtime}
          content={props.description}
        />
      </div>
    </>
  );
}

export default Algorithm;
