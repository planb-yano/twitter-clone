import React from "react";
import Icon from "../atom/Icon";
import Input from "../atom/Input";
import { css } from "@emotion/react";

const PostInput = () => {
  return (
    <div css={styles.base}>
      <Icon src={"/img/icon.png"} width={40} height={40} />
      <div css={styles.wrapper}>
        <Input placeholder={"いまどうしてる？"} />
      </div>
    </div>
  );
};

const styles = {
  base: css`
    display: flex;
  `,
  wrapper: css`
    margin-left: 8px;
    flex-grow: 1;
  `
};

export default PostInput;
