import React from "react";

const ColorfulMessage = (props) => {
  // props.colorとかprops.childrenとか毎回propsて書くの面倒なので分割代入しておく
  const { color, children } = props;

  const contentStyle = {
    color: color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
