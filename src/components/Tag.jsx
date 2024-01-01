import React from "react";

function Tag(props) {
  return (
    <>
      {props.condition ? (
        <h3
          className={"p-1 text-white rounded-md cursor-default " + props.color}
        >
          {props.name}
        </h3>
      ) : (
        <></>
      )}
    </>
  );
}

export default Tag;
