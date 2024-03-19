import React, { useRef } from "react";
import { useEffect } from "react";

function User6(props) {
  const lastVal = useRef();

  useEffect(() => {
    lastVal.current = props.count;
  });

  const previousProps = lastVal.current;

  return (
    <div>
      <h1>Diff Val {props.count - previousProps}</h1>      
    </div>
  );
}

export default User6;
