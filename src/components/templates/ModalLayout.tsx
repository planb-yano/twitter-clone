import React from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const ModalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>{children}</div>
    </div>
  );
};

const styles = {
    base: css`
        width: 100%;
        height: 100vh;
        background-color: #a8a8a8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    container: css`
        width: 35%;
        padding: 50px 0;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
}

export default ModalLayout;
