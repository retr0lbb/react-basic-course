import React from "react";

interface IfProps {
  test?: any;
  children?: React.ReactNode;
}

const If: React.FC<IfProps> = (props) => {
  const childrenArray = React.Children.toArray(props.children);

  const elseChild = childrenArray.find((child) => {
    return React.isValidElement(child) && (child.type as any).name === "Else";
  }) as React.ReactElement;

  const NormalChildren = childrenArray.filter((child) => child !== elseChild);

  if (props.test) {
    return <>{NormalChildren}</>;
  } else if (elseChild) {
    return <>{elseChild}</>;
  } else {
    return null;
  }
};

export default If;

interface ElseProps {
  children?: React.ReactNode;
}

export const Else: React.FC<ElseProps> = (props) => {
  return <>{props.children}</>;
};
