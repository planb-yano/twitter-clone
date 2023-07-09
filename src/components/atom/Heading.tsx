import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4";
};

const Heading: React.FC<Props> = ({ children, className, tag = "h1" }) => {
  const Tag = tag;
  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
