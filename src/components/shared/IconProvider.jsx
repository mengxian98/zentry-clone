import React from "react";
import { IconContext } from "react-icons";

const IconProvider = ({ children, ...rest }) => {
  return (
    <IconContext.Provider {...rest}>
      <div>{children}</div>
    </IconContext.Provider>
  );
};

export default IconProvider;
