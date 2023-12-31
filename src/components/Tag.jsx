import React from "react";

function Tag(props) {
  return (
    <>
      {props.condition ? (
        <h3 className={"p-1 text-white rounded-md bg-" + props.color + "-600"}>
          {props.name}
        </h3>
      ) : (
        <></>
      )}
    </>
  );
}

export default Tag;
