import React from "react";
import Icon from "../atom/Icon";
import TweetHeader from "../molecules/TweetHeader";
import TweetFooter from "../molecules/TweetFooter";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const PostArea: React.FC<Props> = ({ children }) => {
  return (
    <div css={styles.base}>
      <div>
        <Icon src={"/img/icon.png"} width={40} height={40} />
      </div>
      <div>
        <div css={styles.container}>
          <div>
            <TweetHeader />
          </div>
          <div>
            <p css={styles.text}>{children}</p>
          </div>
        </div>
        <div>
          <TweetFooter />
        </div>
      </div>
    </div>
  );
};

const styles = {
  base: css`
    width: 550px;
    display: flex;
  `,
  container: css`
    margin-left: 8px;
  `,
  text: css`
    word-break: break-all;
  `
};

export default PostArea;
