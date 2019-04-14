import React, { useState } from "react";
import PrimaryActionButton from "./PrimaryActionButton.view.js";

let PrimaryActionButtonLogic = props => {
  let [isSelected, setIsSelected] = useState(false);

  return (
    <PrimaryActionButton
      {...props}
      isSelected={isSelected}
      onClick={() => {
        setIsSelected(!isSelected);

        if (typeof props.onClick === "function") {
          props.onClick(props.id);
        }
      }}
    />
  );
};

export default PrimaryActionButtonLogic;
