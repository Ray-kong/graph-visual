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
        <img src={props.image} className="rounded-xl shadow-md"></img>
      </Link>
      <div className="w-full flex flex-row gap-4 justify-center pt-4 pb-10">
        <Tag name="Search" condition={props.search} color={"cyan"} />
        <Tag name="Shortest Path" condition={props.shortest} color={"yellow"} />
        <Tag name="Network Flow" condition={props.network} color={"red"} />
        <Tag name="MST" condition={props.mst} color={"blue"} />
        <Tag
          name="Connected Components"
          condition={props.connected}
          color={"orange"}
        />
        <Tag name="Undirected" condition={props.undirected} color={"amber"} />
        <Tag name="Directed" condition={props.directed} color={"rose"} />
        <Tag name="Greedy" condition={props.greedy} color={"green"} />
        <Tag
          name="Dynamic Programming"
          condition={props.dynamic}
          color={"violet"}
        />
      </div>
    </div>
  );
}

export default Overview;
