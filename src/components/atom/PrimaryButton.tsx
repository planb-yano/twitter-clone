import React from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
  variant?: string;
};

const PrimaryButton: React.FC<Props> = ({ children, variant }) => {
  return <button css={styles.base(variant)}>{children}</button>;
};

const styles = {
  base: (variant?: string) => css`
    padding: 15px 100px;
    background-color: #0ea9fd;
    color: white;
    font-size: 21px;
    font-weight: bold;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      opacity: 0.9;
    }
    ${variant === "md" &&
    css`
      padding: 7px 20px;
      font-size: 15px;
    `}
  `,
};

export default PrimaryButton;
