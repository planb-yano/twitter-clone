import React from "react";
import Icon from "../atom/Icon";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { css } from "@emotion/react";

const ProfileInfo = () => {
  return (
    <div css={styles.base}>
      <Icon src={"/img/icon.png"} width={40} height={40} />
      <div css={styles.wrapper}>
        <div css={styles.textContainer}>
          <p>矢野貴大</p>
          <span>@hoge</span>
        </div>
        <MoreHorizIcon />
      </div>
    </div>
  );
};

const styles = {
  base: css`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 9999px;
    padding: 5px 20px;
    transition: all 0.1s;
    width: fit-content;
    &:hover {
      background-color: #efefef;
    }
  `,
  wrapper: css`
    display: flex;
    align-items: center;
  `,
  textContainer: css`
    margin: 0 10px;
    p {
      font-size: 16px;
    }
    span {
      font-size: 14px;
      color: gray;
    }
  `,
};

export default ProfileInfo;
