import React from "react";
import { css } from "@emotion/react";

type Props = {
  placeholder: string;
};

const Input: React.FC<Props> = ({ placeholder }) => {
  return (
    <div>
      <textarea
        css={styles.textarea}
        placeholder={placeholder}
        onChange={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
      />
    </div>
  );
};

const styles = {
  textarea: css`
    border: none;
    outline: none;
    font-size: 18px;
    resize: none;
    height: 100%;
    width: 100%;
    padding: 5px;
  `,
};

export default Input;
