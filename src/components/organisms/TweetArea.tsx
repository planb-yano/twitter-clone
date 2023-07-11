import React from "react";
import PostInput from "../molecules/PostInput";
import IconList from "../molecules/IconList";
import PrimaryButton from "../atom/PrimaryButton";
import { css } from "@emotion/react";

const TweetArea = () => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <PostInput />
      </div>
      <div css={styles.wrapper}>
        <div css={styles.iconList}>
          <IconList />
        </div>
        <div>
          <PrimaryButton variant="md">ツイートする</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

const styles = {
  base: css`
    width: 100%;
    padding: 10px;
  `,
  container: css``,
  wrapper: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  iconList: css`
    margin-left: 48px;
  `,
};

export default TweetArea;
