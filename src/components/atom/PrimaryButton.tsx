import React from "react";
import { css } from "@emotion/react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const PrimaryButton: React.FC<Props> = ({ className, children }) => {
  return (
    <button css={styles.base} className={className}>
      {children}
    </button>
  );
};

const styles = {
  base: css`
    padding: 15px 100px;
    background-color: #0ea9fd;
    color: white;
    font-size: 21px;
    font-weight: bold;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition: all .2s;
    &:hover {
      opacity: .9;
    }
  `,
};

export default PrimaryButton;
