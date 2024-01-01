import React from "react";
import Tag from "./Tag";
import { Link } from "react-router-dom";

function Overview(props) {
  return (
    <div className="flex flex-col justify-center items-center pt-6 max-w-lg max-h-lg ">
      <h2 className="text-white text-xl font-bold pb-4 text-center underline underline-offset-2">
        {props.name}
      </h2>
      <Link to={props.link}>
        <img
          src={props.image}
          className="rounded-xl shadow-md hover:scale-105 ease-in duration-200"
        ></img>
      </Link>
      <div className="w-full flex flex-row gap-4 justify-center pt-4 pb-10">
        <Tag name="Search" condition={props.search} color={"bg-cyan-600"} />
        <Tag
          name="Shortest Path"
          condition={props.shortest}
          color={"bg-yellow-600"}
        />
        <Tag
          name="Network Flow"
          condition={props.network}
          color={"bg-red-600"}
        />
        <Tag name="MST" condition={props.mst} color={"bg-blue-600"} />
        <Tag
          name="Connected Components"
          condition={props.connected}
          color={"bg-orange-600"}
        />
        <Tag
          name="Undirected"
          condition={props.undirected}
          color={"bg-amber-600"}
        />
        <Tag name="Directed" condition={props.directed} color={"bg-rose-600"} />
        <Tag name="Greedy" condition={props.greedy} color={"bg-green-600"} />
        <Tag
          name="Dynamic Programming"
          condition={props.dynamic}
          color={"bg-violet-600"}
        />
      </div>
    </div>
  );
}

export default Overview;
