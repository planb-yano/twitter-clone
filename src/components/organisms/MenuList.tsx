import React, { useState } from "react";
import MenuListItem from "../molecules/MenuListItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EmailIcon from "@mui/icons-material/Email";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonIcon from "@mui/icons-material/Person";
import MoreOutlinedIcon from "@mui/icons-material/MoreOutlined";
import MoreIcon from "@mui/icons-material/More";
import { css } from "@emotion/react";

const MenuList = () => {
  const [active, setActive] = useState<string>("");
  return (
    <div css={styles.base}>
      <MenuListItem
        icon={HomeOutlinedIcon}
        activeIcon={HomeIcon}
        active={active}
        setActive={setActive}
        name={"ホーム"}
      >
        ホーム
      </MenuListItem>
      <MenuListItem
        icon={SearchIcon}
        activeIcon={SearchIcon}
        active={active}
        setActive={setActive}
        name={"検索"}
      >
        検索
      </MenuListItem>
      <MenuListItem
        icon={NotificationsNoneIcon}
        activeIcon={NotificationsIcon}
        active={active}
        setActive={setActive}
        name={"通知"}
      >
        通知
      </MenuListItem>
      <MenuListItem
        icon={MailOutlineIcon}
        activeIcon={EmailIcon}
        active={active}
        setActive={setActive}
        name={"メッセージ"}
      >
        メッセージ
      </MenuListItem>
      <MenuListItem
        icon={SpeakerNotesOutlinedIcon}
        activeIcon={SpeakerNotesIcon}
        active={active}
        setActive={setActive}
        name={"リスト"}
      >
        リスト
      </MenuListItem>
      <MenuListItem
        icon={BookmarkBorderOutlinedIcon}
        activeIcon={BookmarkIcon}
        active={active}
        setActive={setActive}
        name={"ブックマーク"}
      >
        ブックマーク
      </MenuListItem>
      <MenuListItem
        icon={PersonOutlineOutlinedIcon}
        activeIcon={PersonIcon}
        active={active}
        setActive={setActive}
        name={"プロフィール"}
      >
        プロフィール
      </MenuListItem>
      <MenuListItem
        icon={MoreOutlinedIcon}
        activeIcon={MoreIcon}
        active={active}
        setActive={setActive}
        name={"もっと見る"}
      >
        もっと見る
      </MenuListItem>
    </div>
  );
};

const styles = {
  base: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};

export default MenuList;
