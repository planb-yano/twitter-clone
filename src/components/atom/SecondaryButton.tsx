import React from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SecondaryButton: React.FC<Props> = ({ children, className }) => {
  return (
    <button css={styles.base} className={className}>
      {children}
    </button>
  );
};

const styles = {
  base: css`
    border: 1px solid silver;
    background: transparent;
    border-radius: 9999px;
    padding: 5px 20px;
    cursor: pointer;
    transition: all .5s;
    &:hover {
      background-color: #f3faff;
      border-color: #b6e0ff;
    }
  `,
};

export default SecondaryButton;
