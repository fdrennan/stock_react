import React from "react";
import * as d3 from "d3";
import "./Plot.css";

export const Plot = props => {
  console.log("Inside Plot.css\n", props.stock);
  return <div className="plot">This is the Plot</div>;
};

export default Plot;
