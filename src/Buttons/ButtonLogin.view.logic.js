import React, { useState } from "react";
import ButtonLogin from "./ButtonLogin.view.js";

let ButtonLoginLogic = props => {
  let [isSelected, setIsSelected] = useState(false);

  return (
    <ButtonLogin
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

export default ButtonLoginLogic;
