import React from "react";

function Description(props) {
  return (
    <div className=" pt-10">
      <div className="flex sm:flex-row flex-col">
        <h2 className="font-semibold text-white text-xl lg:text-2xl justify-start">
          Description:
        </h2>
        <h2 className="font-semibold text-white text-xl lg:text-2xl sm:ml-auto">
          {props.name} Runtime: {props.runtime}
        </h2>
      </div>
      <p className="text-white text-md pt-6">{props.content}</p>
    </div>
  );
}

export default Description;
