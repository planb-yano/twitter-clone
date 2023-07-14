import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import IosShareIcon from "@mui/icons-material/IosShare";
import { css } from "@emotion/react";
import Icon2 from "../atom/Icon2";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TweetFooter = () => {
  const [activeRetweet, setActiveRetweet] = useState<boolean>(false);
  const [activeLike, setActiveLike] = useState<boolean>(false);
  return (
    <div css={styles.base}>
      <div css={styles.wrapper(activeRetweet, activeLike)}>
        <IconButton color="info">
          <Icon2 icon={ChatBubbleOutlineIcon} fontSize="small" color="action" />
        </IconButton>
        <span>1</span>
      </div>
      <div css={styles.wrapper(activeRetweet, activeLike)}>
        <IconButton color="success">
          <Icon2
            icon={AutorenewIcon}
            fontSize="small"
            color={activeRetweet ? "success" : "action"}
            active={activeRetweet}
            setActive={setActiveRetweet}
          />
        </IconButton>
        <span>12</span>
      </div>
      <div css={styles.wrapper(activeRetweet, activeLike)}>
        <IconButton color="error">
          <Icon2
            icon={activeLike ? FavoriteIcon : FavoriteBorderIcon}
            fontSize="small"
            color={activeLike ? "error" : "action"}
            active={activeLike}
            setActive={setActiveLike}
          />
        </IconButton>
        <span>15</span>
      </div>
      <div css={styles.wrapper(activeRetweet, activeLike)}>
        <IconButton color="info">
          <Icon2
            icon={AlignVerticalBottomIcon}
            fontSize="small"
            color="action"
          />
        </IconButton>
        <span>280</span>
      </div>
      <IconButton color="info">
        <Icon2 icon={IosShareIcon} fontSize="small" color="action" />
      </IconButton>
    </div>
  );
};

const styles = {
  base: css`
    display: flex;
    align-items: center;
    gap: 50px;
  `,
  wrapper: (activeRetweet: boolean, activeLike: boolean) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: #9a9a9a;
    cursor: pointer;
    &:nth-child(1) {
      &:hover {
        color: #0ea9fd;
      }
    }
    &:nth-child(2) {
      &:hover {
        color: #55ff8b;
      }
      ${activeRetweet &&
      css`
        color: #55ff8b;
      `}
    }
    &:nth-child(3) {
      &:hover {
        color: #fd3c7d;
      }
      ${activeLike &&
      css`
        color: #fd3c7d;
      `}
    }
    &:nth-child(4) {
      &:hover {
        color: #0ea9fd;
      }
    }
  `,
};

export default TweetFooter;
