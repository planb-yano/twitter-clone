import React from "react";
import Icon2 from "../atom/Icon2";
import { css } from "@emotion/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const TweetHeader = () => {
  return (
    <div css={styles.base}>
      <div>
        <span css={styles.name}>矢野貴大</span>
        <span css={styles.id}>@hoge</span>
        <span css={styles.time}>5時間</span>
      </div>
      <Icon2 icon={MoreHorizIcon} fontSize="small" />
    </div>
  );
};

const styles = {
  base: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  name: css`
    font-weight: bold;
  `,
  id: css`
    color: gray;
    margin-left: 5px;
  `,
  time: css`
    color: gray;
    margin-left: 5px;
  `,
};

export default TweetHeader;
