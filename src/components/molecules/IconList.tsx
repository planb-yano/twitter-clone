import React from "react";
import Icon2 from "../atom/Icon2";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifIcon from "@mui/icons-material/Gif";
import BallotIcon from "@mui/icons-material/Ballot";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { css } from "@emotion/react";

const IconList = () => {
  return (
    <div css={styles.base}>
      <Icon2 icon={InsertPhotoIcon} fontSize={"small"} color={"primary"} />
      <Icon2 icon={GifIcon} fontSize={"small"} color={"primary"} />
      <Icon2 icon={BallotIcon} fontSize={"small"} color={"primary"} />
      <Icon2 icon={EmojiEmotionsIcon} fontSize={"small"} color={"primary"} />
      <Icon2 icon={CalendarMonthIcon} fontSize={"small"} color={"primary"} />
      <Icon2 icon={LocationOnIcon} fontSize={"small"} color={"primary"} />
    </div>
  );
};

const styles = {
  base: css`
    display: flex;
    gap: 12px;
  `,
};

export default IconList;
